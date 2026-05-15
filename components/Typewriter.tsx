"use client";

import { useEffect, useState } from "react";

type Props = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
};

export default function Typewriter({
  words,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseTime = 1400,
  className,
}: Props) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;
    const word = words[wordIndex];

    if (!deleting && displayed === word) {
      const t = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(t);
    }

    if (deleting && displayed === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () => {
        setDisplayed((d) =>
          deleting ? word.slice(0, d.length - 1) : word.slice(0, d.length + 1),
        );
      },
      deleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(t);
  }, [displayed, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      {displayed}
      <span className="inline-block w-[1ch] animate-pulse">|</span>
    </span>
  );
}
