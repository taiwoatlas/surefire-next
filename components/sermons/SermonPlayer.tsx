"use client";

import * as React from "react";
import type { Sermon } from "@/types/sermon";

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function SermonPlayer({ sermon }: { readonly sermon: Sermon }) {
  const mediaRef = React.useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = React.useState(false);
  const [current, setCurrent] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  if (!sermon.mediaUrl) {
    return <p className="text-sm text-gray">No media file has been attached to this sermon yet.</p>;
  }

  function togglePlay() {
    const el = mediaRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
    } else {
      el.play();
    }
  }

  function onSeek(e: React.ChangeEvent<HTMLInputElement>) {
    const el = mediaRef.current;
    if (!el) return;
    el.currentTime = Number(e.target.value);
  }

  return (
    <div className="rounded-sm border border-line bg-charcoal p-6">
      <audio
        ref={mediaRef}
        src={sermon.mediaUrl}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
      />
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pause" : "Play"}
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red text-paper"
        >
          {playing ? "❚❚" : "▶"}
        </button>
        <div className="flex-1">
          <input
            type="range"
            min={0}
            max={duration || 0}
            value={current}
            onChange={onSeek}
            aria-label="Seek"
            className="w-full accent-red"
          />
          <div className="mt-1 flex justify-between font-mono text-xs text-gray">
            <span>{formatTime(current)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
