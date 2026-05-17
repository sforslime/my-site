"use client";

import { useEffect, useRef, useState } from "react";
import frames from "./asciiFrames";

const FPS = 12;

export default function AsciiAnimation({ className }: { className?: string }) {
  const [index, setIndex] = useState(0);
  const ref = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    ref.current = setInterval(() => {
      setIndex((i) => (i + 1) % frames.length);
    }, 1000 / FPS);
    return () => clearInterval(ref.current!);
  }, []);

  return (
    <pre
      className={`font-mono text-[6px] leading-[1.1] text-ink/80 overflow-hidden select-none ${className ?? ""}`}
      aria-hidden
    >
      {frames[index]}
    </pre>
  );
}
