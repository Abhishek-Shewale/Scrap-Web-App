import React, { useState } from "react";

const ImageComponent = () => {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const { offsetWidth, offsetHeight } = e.target;
    let x = e.nativeEvent.offsetX;
    let y = e.nativeEvent.offsetY;

    // In case event target is child element (like img)
    if (e.target !== e.currentTarget) {
      x += e.target.offsetLeft;
      y += e.target.offsetTop;
    }

    // Map x, y to values between -1 and 1
    const xVal = (x / offsetWidth) * 2 - 1;
    const yVal = (y / offsetHeight) * 2 - 1;

    setStyle({
      transform: `perspective(300px) rotateX(${yVal * 5}deg) rotateY(${
        xVal * 5
      }deg)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: `perspective(300px) rotateX(0deg) rotateY(0deg)`,
      transition: "transform 0.3s",
    });
  };

  return (
    <div
      className="image"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      <img src="https://scrapbazar.in/public/dust.jpeg" style={{maxWidth: "728px", paddingTop: "5rem"}} alt="About ScrapMart" />
    </div>
  );
};

export default ImageComponent;
