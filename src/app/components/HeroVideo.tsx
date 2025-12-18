"use client";

import { useEffect, useRef, useCallback } from "react";

const youtubeVideos = ["B3KeAHNPUNw", "CUsaoNGRkNY"];
const VIDEO_DURATION = 300; // 5 minuta
const CLIP_DURATION = 10; // 10 sekundi

// Generiši i promešaj segmente za jedan video
function generateShuffledStartTimes(): number[] {
  const startTimes: number[] = [];
  for (let startTime = 0; startTime < VIDEO_DURATION - CLIP_DURATION; startTime += CLIP_DURATION) {
    startTimes.push(startTime);
  }
  // Shuffle
  for (let i = startTimes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [startTimes[i], startTimes[j]] = [startTimes[j], startTimes[i]];
  }
  return startTimes;
}

// YouTube IFrame API types
interface YTPlayer {
  loadVideoById(options: { videoId: string; startSeconds: number; suggestedQuality?: string }): void;
  setPlaybackQuality(quality: string): void;
  playVideo(): void;
  destroy(): void;
}

interface YTPlayerEvent {
  target: YTPlayer;
}

interface YTPlayerConstructor {
  new (
    element: HTMLElement,
    options: {
      videoId: string;
      playerVars?: {
        autoplay?: number;
        mute?: number;
        controls?: number;
        showinfo?: number;
        rel?: number;
        modestbranding?: number;
        playsinline?: number;
        start?: number;
        vq?: string;
      };
      events?: {
        onReady?: (event: YTPlayerEvent) => void;
      };
    }
  ): YTPlayer;
}

interface YTNamespace {
  Player: YTPlayerConstructor;
}

declare global {
  interface Window {
    YT: YTNamespace;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function HeroVideo() {
  const playerRef = useRef<YTPlayer | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Segmenti za svaki video posebno
  const video0SegmentsRef = useRef<number[]>([]);
  const video1SegmentsRef = useRef<number[]>([]);
  const video0IndexRef = useRef(0);
  const video1IndexRef = useRef(0);

  // Koji video je trenutno (0 ili 1) - počinjemo sa 0
  const currentVideoRef = useRef(0);

  const playNextSegment = useCallback(() => {
    if (!playerRef.current) return;

    // Alternacija: 0 → 1 → 0 → 1...
    const nextVideo = currentVideoRef.current === 0 ? 1 : 0;
    currentVideoRef.current = nextVideo;

    let startTime: number;

    if (nextVideo === 0) {
      // Ako smo prošli sve segmente za video 0, promešaj ponovo
      if (video0IndexRef.current >= video0SegmentsRef.current.length) {
        video0SegmentsRef.current = generateShuffledStartTimes();
        video0IndexRef.current = 0;
      }
      startTime = video0SegmentsRef.current[video0IndexRef.current];
      video0IndexRef.current++;
    } else {
      // Ako smo prošli sve segmente za video 1, promešaj ponovo
      if (video1IndexRef.current >= video1SegmentsRef.current.length) {
        video1SegmentsRef.current = generateShuffledStartTimes();
        video1IndexRef.current = 0;
      }
      startTime = video1SegmentsRef.current[video1IndexRef.current];
      video1IndexRef.current++;
    }

    playerRef.current.loadVideoById({
      videoId: youtubeVideos[nextVideo],
      startSeconds: startTime,
      suggestedQuality: "highres",
    });
    playerRef.current.setPlaybackQuality("highres");
  }, []);

  useEffect(() => {
    // Generiši segmente za oba videa
    video0SegmentsRef.current = generateShuffledStartTimes();
    video1SegmentsRef.current = generateShuffledStartTimes();

    // Učitaj YouTube API
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    const initPlayer = () => {
      // Počni sa video 0, prvi segment
      const firstStartTime = video0SegmentsRef.current[0];
      video0IndexRef.current = 1;
      currentVideoRef.current = 0;

      playerRef.current = new window.YT.Player(containerRef.current!, {
        videoId: youtubeVideos[0],
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          start: firstStartTime,
          vq: "highres",
        },
        events: {
          onReady: (event) => {
            event.target.setPlaybackQuality("highres");
            event.target.playVideo();

            // Menjaj svakih 10 sekundi
            intervalRef.current = setInterval(() => {
              playNextSegment();
            }, CLIP_DURATION * 1000);
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (playerRef.current) playerRef.current.destroy();
    };
  }, [playNextSegment]);

  return (
    <div
      ref={containerRef}
      data-cy="hero-video"
      className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden"
    />
  );
}
