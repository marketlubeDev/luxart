import React, { useEffect, useRef, useState } from "react";
import vidOne from "../../../assets/one.mp4";
import vidTwo from "../../../assets/two.mp4";
import vidThree from "../../../assets/three.mp4";
import vidFour from "../../../assets/four.mp4";

import thumb1 from "../../../assets/oneImg.jpeg";
import thumb2 from "../../../assets/fourImg.jpeg";
import thumb3 from "../../../assets/threeImg.jpeg";
import thumb4 from "../../../assets/twoImg.jpeg";

const videos = [
  {
    id: 1,
    thumbnail: thumb1,
    src: vidOne,
  },
  {
    id: 2,
    thumbnail: thumb2,
    src: vidTwo,
  },
  {
    id: 3,
    thumbnail: thumb3,
    src: vidThree,
  },
  {
    id: 4,
    thumbnail: thumb4,
    src: vidFour,
  },
];

const VideoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const videoRefs = useRef({});

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoPlaying && !playingVideo) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === videos.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, playingVideo]);

  const handlePlayClick = (videoId) => {
    const videoElement = videoRefs.current[videoId];

    if (playingVideo === videoId) {
      // Pause the current video
      if (videoElement) {
        videoElement.pause();
      }
      setPlayingVideo(null);
      setIsAutoPlaying(true);
    } else {
      // Stop any currently playing video
      if (playingVideo && videoRefs.current[playingVideo]) {
        videoRefs.current[playingVideo].pause();
      }

      // Play the new video
      setPlayingVideo(videoId);
      setIsAutoPlaying(false);

      if (videoElement) {
        videoElement.play().catch(console.error);
      }
    }
  };

  const handleVideoEnded = (videoId) => {
    setPlayingVideo(null);
    setIsAutoPlaying(true);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? videos.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === videos.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  };

  const getVisibleVideos = () => {
    const visibleCount =
      window.innerWidth >= 1024
        ? 4
        : window.innerWidth >= 768
        ? 3
        : window.innerWidth >= 640
        ? 2
        : 1;
    const result = [];

    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % videos.length;
      result.push({ ...videos[index], displayIndex: i });
    }

    return result;
  };

  return (
    <div className="video-gallery">
      <h2 className="video-gallery__title">
        Explore Our World of <span>Design</span>
      </h2>

      <div
        className="video-gallery__container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button className="nav-button nav-button--prev" onClick={goToPrevious}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="video-gallery__slider">
          <div
            className="video-gallery__track"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / getVisibleVideos().length)
              }%)`,
            }}
          >
            {videos.map((video) => (
              <div key={video.id} className="video-card">
                <div className="video-wrapper">
                  {playingVideo === video.id ? (
                    <div className="video-container">
                      <video
                        ref={(el) => (videoRefs.current[video.id] = el)}
                        src={video.src}
                        className="video-player"
                        controls
                        autoPlay
                        onEnded={() => handleVideoEnded(video.id)}
                        onPause={() => {
                          if (playingVideo === video.id) {
                            setPlayingVideo(null);
                            setIsAutoPlaying(true);
                          }
                        }}
                      />
                    </div>
                  ) : (
                    <div className="thumbnail-container">
                      <img
                        src={video.thumbnail}
                        alt={`Video ${video.id}`}
                        className="video-thumbnail"
                      />
                      <div className="video-overlay">
                        <div className="video-gradient"></div>
                      </div>
                    </div>
                  )}

                  <button
                    className="play-button"
                    onClick={() => handlePlayClick(video.id)}
                  >
                    {playingVideo === video.id ? (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <rect x="6" y="4" width="4" height="16" />
                        <rect x="14" y="4" width="4" height="16" />
                      </svg>
                    ) : (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="nav-button nav-button--next" onClick={goToNext}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="pagination">
        {videos.map((_, index) => (
          <button
            key={index}
            className={`pagination-dot ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <style jsx>{`
        .video-gallery {
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
          padding: 4rem 2rem;
          color: #fff;
          text-align: center;
          overflow: hidden;
          position: relative;
          min-height: 100vh;
        }

        .video-gallery__title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 300;
          line-height: 1.2;
          margin-bottom: 3rem;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            sans-serif;
        }

        .video-gallery__title span {
          background: linear-gradient(45deg, #f4d300, #ffd700, #ffed4e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 400;
          filter: drop-shadow(0 2px 4px rgba(244, 211, 0, 0.3));
        }

        .video-gallery__container {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .video-gallery__slider {
          flex: 1;
          overflow: hidden;
          border-radius: 20px;
        }

        .video-gallery__track {
          display: flex;
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
        }

        .video-card {
          flex: 0 0 calc(25% - 15px);
          margin: 0 7.5px;
          border-radius: 20px;
          overflow: hidden;
          background: #111;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.05);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
        }

        .video-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(244, 211, 0, 0.2);
        }

        .video-wrapper {
          position: relative;
          aspect-ratio: 9/16;
          cursor: pointer;
          overflow: hidden;
          border-radius: 20px;
        }

        .thumbnail-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .video-thumbnail {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .video-card:hover .video-thumbnail {
          transform: scale(1.05);
        }

        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .video-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            rgba(244, 211, 0, 0.1) 0%,
            rgba(255, 215, 0, 0.1) 100%
          );
        }

        .video-container {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          background: #000;
        }

        .video-player {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
        }

        .play-button {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70px;
          height: 70px;
          border: none;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          color: white;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .play-button:hover {
          background: rgba(244, 211, 0, 0.9);
          transform: translate(-50%, -50%) scale(1.1);
          box-shadow: 0 15px 40px rgba(244, 211, 0, 0.3);
        }

        .nav-button {
          width: 60px;
          height: 60px;
          border: none;
          border-radius: 50%;
          background: rgba(244, 211, 0, 0.1);
          backdrop-filter: blur(10px);
          color: #f4d300;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .nav-button:hover {
          background: rgba(244, 211, 0, 0.2);
          transform: scale(1.1);
          box-shadow: 0 15px 40px rgba(244, 211, 0, 0.2);
        }

        .pagination {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 3rem;
        }

        .pagination-dot {
          width: 12px;
          height: 12px;
          border: none;
          border-radius: 50%;
          background: rgba(244, 211, 0, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .pagination-dot.active {
          background: #f4d300;
          transform: scale(1.3);
          box-shadow: 0 0 20px rgba(244, 211, 0, 0.5);
        }

        .pagination-dot:hover {
          background: rgba(244, 211, 0, 0.6);
          transform: scale(1.1);
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .video-card {
            flex: 0 0 calc(33.333% - 10px);
          }
        }

        @media (max-width: 768px) {
          .video-gallery {
            padding: 3rem 1rem;
          }

          .video-gallery__container {
            gap: 1rem;
          }

          .video-card {
            flex: 0 0 calc(50% - 7.5px);
          }

          .nav-button {
            width: 50px;
            height: 50px;
          }
        }

        @media (max-width: 640px) {
          .video-gallery {
            padding: 2rem 0.5rem;
          }

          .video-card {
            flex: 0 0 calc(100% - 15px);
          }

          .nav-button {
            display: none;
          }

          .video-gallery__container {
            gap: 0;
          }
        }

        @media (max-width: 480px) {
          .play-button {
            width: 60px;
            height: 60px;
          }

          .pagination-dot {
            width: 10px;
            height: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default VideoGallery;
