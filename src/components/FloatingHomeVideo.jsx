import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Play, Pause, X, Volume2, VolumeX } from "lucide-react";
import videoHome from "../assets/videos/video_home.mp4";

export default function FloatingHomeVideo({ src = videoHome }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const location = useLocation();

  // Autoplay muted video on mount & cleanup on unmount
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Autoplay prevented by browser policy
            setIsPlaying(false);
          });
      }
    }

    return () => {
      if (video) {
        video.pause();
      }
    };
  }, []);

  // Handle Play/Pause toggle
  const togglePlay = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  // Handle Mute/Unmute toggle
  const toggleMute = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  // Handle Close (X) button
  const handleClose = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (video) {
      video.pause();
    }
    setIsVisible(false);
  };

  // Only display on the Home page route ("/" or "") and when visible
  const isHomePage =
    location.pathname === "/" ||
    location.pathname === "" ||
    location.pathname === "/#";

  if (!isVisible || !isHomePage) {
    return null;
  }

  return (
    <div
      className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-40 w-[240px] sm:w-[280px] md:w-[310px] aspect-video rounded-[14px] overflow-hidden shadow-2xl shadow-black/50 border border-white/20 bg-black group select-none transition-all duration-300"
      role="region"
      aria-label="Floating Video Player"
      style={{
        boxShadow:
          "0 20px 30px -10px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(255, 255, 255, 0.15)",
      }}
    >
      {/* Video Stream */}
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        onClick={togglePlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onVolumeChange={() => setIsMuted(videoRef.current?.muted ?? true)}
        className="w-full h-full object-cover block cursor-pointer"
      />

      {/* Top subtle gradient overlay for close button visibility */}
      <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-10" />

      {/* Bottom subtle gradient overlay for controls visibility */}
      <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-10" />

      {/* Close (X) Button in top-right */}
      <button
        type="button"
        onClick={handleClose}
        className="absolute top-2 right-2 z-20 flex items-center justify-center w-7 h-7 rounded-full bg-black/55 hover:bg-black/85 text-white/90 hover:text-white transition-all duration-200 backdrop-blur-md border border-white/20 hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
        aria-label="Close video player"
        title="Close"
      >
        <X className="w-3.5 h-3.5" />
      </button>

      {/* Media Controls Bar near bottom-left */}
      <div className="absolute bottom-2 left-2 z-20 flex items-center gap-1.5">
        {/* Play/Pause Button */}
        {/* <button
          type="button"
          onClick={togglePlay}
          className="flex items-center justify-center w-7 h-7 rounded-full bg-black/55 hover:bg-black/85 text-white/90 hover:text-white transition-all duration-200 backdrop-blur-md border border-white/20 hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
          aria-label={isPlaying ? "Pause video" : "Play video"}
          title={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause className="w-3.5 h-3.5 fill-current" />
          ) : (
            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
          )}
        </button> */}

        {/* Mute/Unmute Audio Button */}
        {/* <button
          type="button"
          onClick={toggleMute}
          className="flex items-center justify-center w-7 h-7 rounded-full bg-black/55 hover:bg-black/85 text-white/90 hover:text-white transition-all duration-200 backdrop-blur-md border border-white/20 hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="w-3.5 h-3.5" />
          ) : (
            <Volume2 className="w-3.5 h-3.5" />
          )}
        </button> */}
      </div>
    </div>
  );
}
