import React, { useEffect, useRef } from "react";
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
];

const loopedVideos = [...videos, ...videos]; // duplicate for looping

const VideoGallery = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1.5;

    const scrollInterval = setInterval(() => {
      scrollAmount += scrollSpeed;
      scrollContainer.scrollLeft = scrollAmount;

      // Reset when scrolled past half (since we duplicated the list)
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
        scrollContainer.scrollLeft = 0;
      }
    }, 30);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="video-gallery">
      <div className="video-gallery__scroll" ref={scrollRef}>
        {loopedVideos.map((video, index) => (
          <div className="video-card" key={`${video.id}-${index}`}>
            <div className="video-wrapper">
              <video
                className="video-card__video"
                src={video.src}
                poster={video.thumbnail}
                muted
                loop
                playsInline
              />
              <div className="play-button-overlay">▶</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
