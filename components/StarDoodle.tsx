"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import frames from "./starFrames";

const FPS = 15;
const BASE_FONT_PX = 16;
const FIT_FACTOR = 0.96; // small margin so edges never kiss the container

export default function StarDoodle({ className }: { className?: string }) {
  const [tick, setTick] = useState(0);
  const [scale, setScale] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1000 / FPS);
    return () => clearInterval(id);
  }, []);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const pre = preRef.current;
    if (!wrap || !pre) return;

    const fit = () => {
      const cw = wrap.clientWidth;
      const ch = wrap.clientHeight;
      const pw = pre.offsetWidth;
      const ph = pre.offsetHeight;
      if (pw > 0 && ph > 0 && cw > 0 && ch > 0) {
        setScale(Math.min(cw / pw, ch / ph) * FIT_FACTOR);
      }
    };

    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(wrap);
    ro.observe(pre);

    type DocWithFonts = Document & { fonts?: { ready?: Promise<unknown> } };
    const docFonts = (document as DocWithFonts).fonts;
    if (docFonts?.ready) docFonts.ready.then(fit);

    return () => ro.disconnect();
  }, []);

  const period = (frames.length - 1) * 2;
  const phase = tick % period;
  const index = phase < frames.length ? phase : period - phase;

  return (
    <div
      ref={wrapRef}
      className={`flex items-center justify-center overflow-hidden ${className ?? ""}`}
    >
      <pre
        ref={preRef}
        className="font-mono leading-[1.0] text-ink select-none whitespace-pre m-0"
        style={{
          fontSize: `${BASE_FONT_PX}px`,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          opacity: scale > 0 ? 1 : 0,
        }}
        aria-hidden
      >
        {frames[index]}
      </pre>
    </div>
  );
}
