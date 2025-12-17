import { useState } from "react";
import { Play } from "lucide-react";

interface VideoTestimonialCardProps {
  videoId: string;
  title: string;
}

const VideoTestimonialCard = ({ videoId, title }: VideoTestimonialCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl border-2 border-border bg-card shadow-[var(--shadow-elevated)] transition-all hover:border-primary hover:shadow-[var(--shadow-glow)]">
      {isPlaying ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          onClick={() => setIsPlaying(true)}
          className="group relative h-full w-full"
          aria-label={`Play video: ${title}`}
        >
          <img
            src={thumbnailUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-all group-hover:bg-black/40">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
              <Play className="h-8 w-8 fill-current" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <p className="text-left font-semibold text-white">{title}</p>
          </div>
        </button>
      )}
    </div>
  );
};

export default VideoTestimonialCard;
