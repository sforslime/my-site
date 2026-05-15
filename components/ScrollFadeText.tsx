"use client";

import { useRef, useEffect, useState } from "react";

export default function ScrollFadeText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0.12);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress: 0 when element top hits bottom of screen → 1 when it reaches 40% up
      const progress = 1 - Math.max(0, Math.min(1, rect.top / (vh * 0.65)));
      setOpacity(0.12 + progress * 0.88);
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div ref={ref} className={className} style={{ opacity, transition: "opacity 0.1s linear" }}>
      {children}
    </div>
  );
}
