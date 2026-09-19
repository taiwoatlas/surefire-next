import { StageCurtain } from "@/components/decor/StageCurtain";
import { AudioVisualizer } from "@/components/decor/AudioVisualizer";

interface LiveStreamProps {
  readonly isLive?: boolean;
  readonly embedUrl?: string;
}

export function LiveStream({ isLive = false, embedUrl }: LiveStreamProps) {
  if (isLive && embedUrl) {
    return (
      <div className="aspect-video overflow-hidden rounded-sm bg-ink">
        <iframe src={embedUrl} title="Live service" className="h-full w-full" allow="autoplay; encrypted-media" allowFullScreen />
      </div>
    );
  }

  return (
    <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-sm bg-ink text-center text-paper">
      <StageCurtain side="left" />
      <StageCurtain side="right" />
      <div className="relative z-10 px-6">
        <p className="font-mono text-xs uppercase tracking-wide text-gold">Offline</p>
        <h2 className="mt-4 font-display text-2xl md:text-3xl">No live stream at the moment</h2>
        <div className="mt-6 flex justify-center">
          <AudioVisualizer bars={16} />
        </div>
      </div>
    </div>
  );
}
