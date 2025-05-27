import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import thumb1 from "../../../assets/thumb1.jpg";
import thumb2 from "../../../assets/thumb2.jpg";
import thumb3 from "../../../assets/thumb3.jpg";
import thumb4 from "../../../assets/thumb4.jpg";
import thumb5 from "../../../assets/thumb5.jpg";
import thumb6 from "../../../assets/thumb6.jpg";
import video1 from "../../../assets/video1.mp4";

const videos = [
  { id: 1, thumbnail: thumb1, src: video1 },
  { id: 2, thumbnail: thumb2, src: video1 },
  { id: 3, thumbnail: thumb3, src: video1 },
  { id: 4, thumbnail: thumb4, src: video1 },
  { id: 5, thumbnail: thumb5, src: video1 },
  { id: 6, thumbnail: thumb6, src: video1 },
  { id: 7, thumbnail: thumb1, src: video1 },
  { id: 8, thumbnail: thumb2, src: video1 },
  { id: 9, thumbnail: thumb3, src: video1 },
  { id: 10, thumbnail: thumb4, src: video1 },
  { id: 11, thumbnail: thumb5, src: video1 },
  { id: 12, thumbnail: thumb6, src: video1 },
];

const VideoGallery = () => {
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);

  const handleVideoHover = (videoId) => {
    setHoveredVideo(videoId);
  };

  const handleVideoLeave = () => {
    setHoveredVideo(null);
  };

  const handlePlayClick = (videoId) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId);
  };

  return (
    <div className="video-gallery">
      <h2 className="video-gallery__title">
        Explore Our World of <span>Design</span>
      </h2>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="video-gallery__swiper"
      >
        {videos.map((video) => (
          <SwiperSlide key={video.id}>
            <div className="video-card">
              <div
                className="video-wrapper"
                onMouseEnter={() => handleVideoHover(video.id)}
                onMouseLeave={handleVideoLeave}
              >
                {hoveredVideo === video.id || playingVideo === video.id ? (
                  <video
                    className="video-card__video"
                    src={video.src}
                    poster={video.thumbnail}
                    muted
                    loop
                    playsInline
                    ref={(el) => {
                      if (el) {
                        if (
                          hoveredVideo === video.id ||
                          playingVideo === video.id
                        ) {
                          el.play();
                        } else {
                          el.pause();
                          el.currentTime = 0;
                        }
                      }
                    }}
                  />
                ) : (
                  <img
                    src={video.thumbnail}
                    alt={`Video ${video.id}`}
                    className="video-card__thumbnail"
                  />
                )}
                <div
                  className="play-button-overlay"
                  onClick={() => handlePlayClick(video.id)}
                >
                  {playingVideo === video.id ? "⏸" : "▶"}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoGallery;
