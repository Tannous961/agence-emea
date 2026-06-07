'use client';

import { useEffect, useRef, useState } from 'react';

export type TypewriterSegment = {
  readonly text: string;
  readonly color?: string;
};

type TypewriterTextProps = {
  segments: readonly TypewriterSegment[];
  onComplete?: () => void;
  className?: string;
  lineClassName?: string;
  charClassName?: string;
  style?: React.CSSProperties;
  startDelayMs?: number;
  ariaLabel?: string;
};

const BASE_CHAR_MS = 36;
const JITTER_MS = 22;
const WORD_PAUSE_MS = 90;
const PUNCT_PAUSE_MS = 140;
const LINE_PAUSE_MS = 260;
const DEFAULT_START_DELAY_MS = 420;

function getCharDelay(char: string): number {
  let ms = BASE_CHAR_MS + Math.random() * JITTER_MS;
  if (char === ' ') ms += WORD_PAUSE_MS;
  if (char === '.' || char === ',' || char === '!' || char === '?') ms += PUNCT_PAUSE_MS;
  return ms;
}

export function TypewriterText({
  segments,
  onComplete,
  className,
  lineClassName = 'block font-body font-bold uppercase',
  charClassName,
  style,
  startDelayMs = DEFAULT_START_DELAY_MS,
  ariaLabel,
}: TypewriterTextProps) {
  const [started, setStarted] = useState(false);
  const [segmentIndex, setSegmentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelayMs);
    return () => clearTimeout(t);
  }, [startDelayMs]);

  useEffect(() => {
    if (!started || done) return;

    const current = segments[segmentIndex];
    if (!current) {
      setDone(true);
      onCompleteRef.current?.();
      return;
    }

    if (charIndex < current.text.length) {
      const nextChar = current.text[charIndex] ?? '';
      const timeout = setTimeout(
        () => setCharIndex((c) => c + 1),
        getCharDelay(nextChar),
      );
      return () => clearTimeout(timeout);
    }

    if (segmentIndex < segments.length - 1) {
      const timeout = setTimeout(() => {
        setSegmentIndex((s) => s + 1);
        setCharIndex(0);
      }, LINE_PAUSE_MS);
      return () => clearTimeout(timeout);
    }

    setDone(true);
    onCompleteRef.current?.();
  }, [started, charIndex, done, segmentIndex, segments]);

  return (
    <h1 className={className} aria-label={ariaLabel}>
      {segments.map((seg, i) => {
        if (i > segmentIndex) return null;

        const visible =
          i < segmentIndex ? seg.text : seg.text.slice(0, charIndex);
        const isActiveLine = !done && i === segmentIndex;
        const showCursor = isActiveLine;
        const color = seg.color ?? 'var(--color-cream)';

        return (
          <div key={seg.text} className="leading-[0.92]">
            <span
              className={lineClassName}
              style={{ ...style, color }}
            >
              {visible.split('').map((char, ci) => {
                const isNewest = isActiveLine && ci === visible.length - 1;
                return (
                  <span
                    key={`${i}-${ci}`}
                    className={
                      isNewest
                        ? ['typewriter-char-new', charClassName].filter(Boolean).join(' ')
                        : charClassName
                    }
                  >
                    {char}
                  </span>
                );
              })}
              {showCursor && (
                <span
                  className="typewriter-cursor typewriter-cursor-ai"
                  style={{ color }}
                  aria-hidden="true"
                />
              )}
            </span>
          </div>
        );
      })}
    </h1>
  );
}
