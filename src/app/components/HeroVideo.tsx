"use client";

import { useState, useEffect } from "react";

// TODO: Zameni sa pravim YouTube video ID-jevima
const youtubeVideos = [
  "VIDEO_ID_1", // Prvi video - zameni sa pravim ID-jem
  "VIDEO_ID_2", // Drugi video - zameni sa pravim ID-jem
];

export default function HeroVideo() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(() => Math.floor(Math.random() * youtubeVideos.length));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev === 0 ? 1 : 0));
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  const videoId = youtubeVideos[currentVideoIndex];

  return (
    <iframe
      data-cy="hero-video"
      className="absolute inset-0 w-full h-full rounded-2xl"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
      title="Hero Video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      key={currentVideoIndex}
    />
  );
}
