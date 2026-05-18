"use client";

import { useEffect, useRef, useState } from "react";
import frames from "./starFrames";

const FPS = 15;

export default function StarDoodle({ className }: { className?: string }) {
  const [tick, setTick] = useState(0);
  const ref = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    ref.current = setInterval(() => {
      setTick((t) => t + 1);
    }, 1000 / FPS);
    return () => clearInterval(ref.current!);
  }, []);

  // Loop the drawing then play it backwards (erasing) for a continuous animation.
  const period = (frames.length - 1) * 2;
  const phase = tick % period;
  const index = phase < frames.length ? phase : period - phase;

  return (
    <div
      className={`flex items-center justify-center ${className ?? ""}`}
      style={{ containerType: "inline-size" } as React.CSSProperties}
    >
      <pre
        className="font-mono leading-[1.0] text-ink select-none whitespace-pre inline-block"
        style={{ fontSize: "calc(100cqw / 45)" }}
        aria-hidden
      >
        {frames[index]}
      </pre>
    </div>
  );
}
