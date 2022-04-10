import Konva from "konva";
import React, { useEffect, useRef, useState } from "react";
import { Stage, Layer, Image } from "react-konva";
import TextShow from "./Text";
import VideoShow from "./Video";

function App() {
  const [showImage, setShowimage] = useState(new window.Image());
  const [addText, setText] = useState("");
  const video = useRef();
  const image = useRef();
  const anim = useRef();

  useEffect(() => {
    const img = new window.Image();
    img.src =
      "https://i.pinimg.com/550x/75/06/5d/75065da93d181c15f8266289313231c6.jpg";
    setShowimage(img);
  }, []);

  const buttonName = !addText ? "ADD" : "REMOVE";
  const handleAdd = (btn) => {
    if (btn === "ADD") {
      setText("Show Data");
    } else {
      setText("");
    }
  };

  const color = {
    backgroundColor: buttonName === "ADD" ? "green" : "red",
    margin: "10px",
  };

  useEffect(() => {
    anim.current = new Konva.Animation(() => {
      image.current.image(video.current);
    }, image.current.getLayer());
  }, []);

  return (
    <div>
      <button onClick={() => handleAdd(buttonName)} style={color}>
        {buttonName}
      </button>
      <button
        onClick={() => {
          video.current.play();
          anim.current.start();
        }}
      >
        PLAY
      </button>
      <button
        onClick={() => {
          video.current.pause();
          anim.current.stop();
        }}
      >
        PAUSE
      </button>
      <video
        style={{ display: "none" }}
        ref={video}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
      />
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <TextShow x={10} y={20} addText={addText} />
          <Image x={100} y={80} image={showImage} />
          <VideoShow width={300} height={200} image={image} />
        </Layer>
      </Stage>
    </div>
  );
}
export default App;
