import React, { useEffect, useState } from "react";
import { Stage, Layer, Image } from "react-konva";

 function App() {
  const [showImage, setShowimage] = useState(new window.Image());

  useEffect(() => {
    const img = new window.Image();
    img.src =
      "https://i.pinimg.com/550x/75/06/5d/75065da93d181c15f8266289313231c6.jpg";
      setShowimage(img);
  }, []);

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Image x={200} y={100} image={showImage} />
      </Layer>
    </Stage>
  );
}
export default App