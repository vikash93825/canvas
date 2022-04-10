import React from "react";
import { Image,  } from "react-konva";

function VideoShow({ width, height,image }) {
  return (
    <Image
      x={100}
      y={450}
      ref={image}
      width={width}
      height={height}
      stroke="black"
    />
  );
}

export default VideoShow;
