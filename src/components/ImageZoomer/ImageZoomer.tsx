import React, { useState } from "react";
interface ImageZoomerProps {
  url: "string";
  initialScale: any;
}
const ImageZoomer: React.FC<ImageZoomerProps> = ({ url, initialScale }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const handleZoomIn = () => {
    setZoomLevel((prevZoomLevel) => prevZoomLevel + 0.1);
  };

  const handleZoomOut = () => {
    setZoomLevel((prevZoomLevel) => Math.max(prevZoomLevel - 0.1, 0.1));
  };

  return (
    <div>
      <div style={{}}>
        <img
          src={url}
          width={`${initialScale}px`}
          style={{
            transform: `scale(${zoomLevel})`,
            transition: "transform 0.3s ease-in-out",
          }}
        />
      </div>
      <div>
        <button onClick={handleZoomIn} style={{ zIndex: "999" }}>
          +
        </button>
        <button onClick={handleZoomOut}>-</button>
      </div>
    </div>
  );
};

export default ImageZoomer;
