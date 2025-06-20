import { HexColorPicker } from "react-colorful";
import React, { useState } from "react";

const SelectColor = () => {
  const [color, setColor] = useState("#aabbcc");
  return <HexColorPicker color={color} onChange={setColor} />;
};

export default SelectColor;