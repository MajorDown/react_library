import React, { useRef } from "react";

const style = {
  carousel: {
    width: "100%",
    display: "flex",
  },
  btnPrev: {
    background: "none",
    border: "none",
  },
  btnNext: {
    background: "none",
    border: "none",
  },
  carouselContent: {
    maxWidth: "200px",
    maxHeight: "200px",
    overflow: "hidden",
    display: "flex",
    scrollBehavior: "smooth",
    borderRadius: "10px",
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "100%",
  },
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
};

const Carousel = ({ src, id }) => {
  const carouselRef = useRef(null);

  const handlePrev = () => {
    const container = carouselRef.current;
    container.scrollLeft -= container.offsetWidth;
  };

  const handleNext = () => {
    const container = carouselRef.current;
    container.scrollLeft += container.offsetWidth;
  };

  return (
    <div className="carousel" id={id} style={style.carousel}>
      <button className="btn-prev" onClick={handlePrev} style={style.btnPrev}>
        <svg viewBox="0 -960 960 960">
          <path
            onClick={handlePrev}
            d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z"
          />
        </svg>
      </button>
      <div
        className="carousel-content"
        ref={carouselRef}
        style={style.carouselContent}
      >
        {src.map((imageUrl, index) => (
          <div className="img-container" key={index} style={style.imgContainer}>
            <img
              src={imageUrl}
              alt={`Carousel Image ${index + 1}`}
              style={style.img}
            />
          </div>
        ))}
      </div>
      <button className="btn-next" onClick={handleNext} style={style.btnNext}>
        <svg viewBox="0 -960 960 960">
          <path
            onClick={handleNext}
            d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
