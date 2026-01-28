import { useEffect, useState, useRef } from "react";
import "./ImageSlider.css";

export default function ImageSlider({ images, interval = 3000 }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false); // track pause
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    // Clear previous interval
    if (intervalRef.current) clearInterval(intervalRef.current);

    // Only run if not paused
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, interval);
    }

    return () => clearInterval(intervalRef.current);
  }, [images, interval, isPaused]);

  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  const next = () =>
    setIndex((prev) => (prev + 1) % images.length);

  return (
    <div
      className="slider"
      onMouseEnter={() => setIsPaused(true)} // pause on hover
      onMouseLeave={() => setIsPaused(false)} // resume on leave
      onTouchStart={() => setIsPaused(true)} // pause on touch
      onTouchEnd={() => setIsPaused(false)} // resume on touch end
    >
      <img src={images[index]} alt="Experience" />
      {images.length > 1 && (
        <>
          <button className="slider-btn left" onClick={prev}>‹</button>
          <button className="slider-btn right" onClick={next}>›</button>
        </>
      )}
    </div>
  );
}
