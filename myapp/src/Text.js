import React from "react";
import { Text } from "react-konva";

function TextShow({ addText, x, y }) {
  return <Text x={x} y={y} text={addText} />;
}

export default TextShow;
