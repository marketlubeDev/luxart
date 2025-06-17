import React, { useEffect, useRef, useState } from "react";

// Mock thumbnail images - replace with your actual images
const thumb1 = "https://picsum.photos/400/400?random=1";
const thumb2 = "https://picsum.photos/400/400?random=2";
const thumb3 = "https://picsum.photos/400/400?random=3";
const thumb4 = "https://picsum.photos/400/400?random=4";
const thumb5 = "https://picsum.photos/400/400?random=5";
const thumb6 = "https://picsum.photos/400/400?random=6";

const instaVideoOne = "https://www.instagram.com/p/DK3qffti59X/";
const instaVideoTwo = "https://www.instagram.com/p/DKwnE5tBASf/";
const instaVideoThree = "https://www.instagram.com/p/DKY18Q2Ss4H/";
const instaVideoFour = "https://www.instagram.com/p/DKMFtkKPecO/";
const instaVideoFive = "https://www.instagram.com/p/DJwLGpTIhgH/";
const instaVideoSix = "https://www.instagram.com/p/DJZDc1Zp3S0/";

const videos = [
  {
    id: 1,
    thumbnail: thumb1,
    src: instaVideoOne,
    embedSrc: instaVideoOne + "embed/captioned/",
  },
  {
    id: 2,
    thumbnail: thumb2,
    src: instaVideoTwo,
    embedSrc: instaVideoTwo + "embed/captioned/",
  },
  {
    id: 3,
    thumbnail: thumb3,
    src: instaVideoThree,
    embedSrc: instaVideoThree + "embed/captioned/",
  },
  {
    id: 4,
    thumbnail: thumb4,
    src: instaVideoFour,
    embedSrc: instaVideoFour + "embed/captioned/",
  },
  {
    id: 5,
    thumbnail: thumb5,
    src: instaVideoFive,
    embedSrc: instaVideoFive + "embed/captioned/",
  },
  {
    id: 6,
    thumbnail: thumb6,
    src: instaVideoSix,
    embedSrc: instaVideoSix + "embed/captioned/",
  },
];

const VideoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [loadedIframes, setLoadedIframes] = useState(new Set());
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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

  // Load Instagram embed script
  useEffect(() => {
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.instagram.com/embed.js";
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  }, [playingVideo]);

  const handlePlayClick = (videoId) => {
    const newPlayingVideo = playingVideo === videoId ? null : videoId;
    setPlayingVideo(newPlayingVideo);
    setIsAutoPlaying(!newPlayingVideo);

    if (newPlayingVideo) {
      setLoadedIframes((prev) => new Set([...prev, videoId]));
    }
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
                    <div className="instagram-embed-container">
                      <iframe
                        src={video.embedSrc}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        allowTransparency="true"
                        allow="encrypted-media"
                        loading="lazy"
                        className="instagram-iframe"
                        title={`Instagram video ${video.id}`}
                      />
                      {!loadedIframes.has(video.id) && (
                        <div className="loading-overlay">
                          <div className="instagram-spinner">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                          <p>Loading Instagram content...</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="thumbnail-container">
                      <img
                        src={video.thumbnail}
                        alt={`Video ${video.id}`}
                        className="video-thumbnail"
                      />
                      <div className="instagram-overlay">
                        <div className="instagram-gradient"></div>
                        <div className="instagram-icon">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="white"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                            <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" />
                            <circle cx="18.406" cy="5.594" r="1.44" />
                          </svg>
                        </div>
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

        .instagram-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .instagram-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            rgba(131, 58, 180, 0.1) 0%,
            rgba(253, 29, 29, 0.1) 50%,
            rgba(252, 176, 64, 0.1) 100%
          );
        }

        .instagram-icon {
          position: absolute;
          top: 20px;
          right: 20px;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }

        .video-card:hover .instagram-icon {
          opacity: 1;
        }

        .instagram-embed-container {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          background: #f8f9fa;
        }

        .instagram-iframe {
          border-radius: 20px;
          background: transparent;
        }

        .loading-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          z-index: 2;
          border-radius: 20px;
        }

        .instagram-spinner {
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
          margin-bottom: 20px;
        }

        .instagram-spinner div {
          position: absolute;
          top: 33px;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background: linear-gradient(45deg, #f4d300, #ffd700);
          animation: instagram-spinner 1.2s linear infinite;
        }

        .instagram-spinner div:nth-child(1) {
          left: 8px;
          animation-delay: 0s;
        }
        .instagram-spinner div:nth-child(2) {
          left: 8px;
          animation-delay: -0.4s;
        }
        .instagram-spinner div:nth-child(3) {
          left: 32px;
          animation-delay: -0.8s;
        }
        .instagram-spinner div:nth-child(4) {
          left: 56px;
          animation-delay: -1.2s;
        }

        @keyframes instagram-spinner {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(1);
          }
          100% {
            transform: scale(0);
          }
        }

        .loading-overlay p {
          color: #f4d300;
          font-size: 16px;
          font-weight: 500;
          margin: 0;
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
