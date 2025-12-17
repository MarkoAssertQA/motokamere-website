"use client";

import { useState, useEffect, useRef } from "react";

const videos = ["/hero_videos/20250816095042_000025_F.MP4", "/hero_videos/20250816095042_000026_R.MP4"];

export default function HeroVideo() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(() => Math.floor(Math.random() * videos.length));
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev === 0 ? 1 : 0));
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  // Start video from random position when it loads
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      const duration = videoRef.current.duration;
      // Start at random position (0% to 80% of duration to ensure some playback before loop)
      const randomStart = Math.random() * duration * 0.8;
      videoRef.current.currentTime = randomStart;
      videoRef.current.play();
    }
  };

  return (
    <video
      ref={videoRef}
      data-cy="hero-video"
      className="absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-500"
      autoPlay
      muted
      loop
      playsInline
      key={currentVideoIndex}
      onLoadedMetadata={handleLoadedMetadata}
    >
      <source src={videos[currentVideoIndex]} type="video/mp4" />
    </video>
  );
}
