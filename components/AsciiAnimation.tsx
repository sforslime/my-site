"use client";

import { useEffect, useRef, useState } from "react";
import frames from "./asciiFrames";

const FPS = 15;

export default function AsciiAnimation({ className }: { className?: string }) {
  const [tick, setTick] = useState(0);
  const ref = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    ref.current = setInterval(() => {
      setTick((t) => t + 1);
    }, 1000 / FPS);
    return () => clearInterval(ref.current!);
  }, []);

  // Palindrome loop: 0,1,...,N-1,N-2,...,1,0,1,... (period = 2N-2)
  const period = (frames.length - 1) * 2;
  const phase = tick % period;
  const index = phase < frames.length ? phase : period - phase;

  return (
    <div className={`flex items-center justify-center ${className ?? ""}`}>
      <pre
        className="font-mono text-[8px] sm:text-[9px] md:text-[10px] leading-[1.0] text-ink select-none whitespace-pre inline-block"
        aria-hidden
      >
        {frames[index]}
      </pre>
    </div>
  );
}
