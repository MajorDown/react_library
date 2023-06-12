import React, { useRef } from "react";

const Carousel = ({ src, numberOfView, id }) => {
  // HOOKS / PROPS
  const carouselRef = useRef(null);
  const imgWidth = 100 / numberOfView;

  // STYLE
  const style = {
    carouselContent: {
      position: "relative",
      width: "100%",
      overflowX: "auto",
      whiteSpace: "nowrap",
    },
    imgContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      aspectRatio: "1/1",
      width: `${imgWidth}%`,
    },
    imgContent: {
      maxWidth: "100%",
      maxHeight: "100%",
      padding: "1px",
    },
    prev: {
      position: "fixed",
      top: "50%",
      transform: "translateY(-50%)",
    },
    next: {
      position: "fixed",
      left: "100%",
      tranform: "translateX(-100%)",
      top: "50%",
      transform: "translateY(-50%)",
    },
  };

  // HANDLERS
  const handlePrev = () => {
    carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
  };
  const handleNext = () => {
    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
  };

  // RENDER
  return (
    <div className="carousel" id={id}>
      <button className="btn-prev" onClick={handlePrev} style={style.prev}>
        <svg viewBox="0 -960 960 960">
          <path
            onClick={handlePrev}
            d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z"
          />
        </svg>
      </button>
      <div
        className="carousel-Content"
        ref={carouselRef}
        style={style.carouselContent}
      >
        {src.map((imageUrl, index) => (
          <div className="img-Container" style={style.imgContainer}>
            <img
              style={style.imgContent}
              key={index}
              src={imageUrl}
              alt={`Carousel Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <button className="btn-next" onClick={handleNext} style={style.next}>
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
