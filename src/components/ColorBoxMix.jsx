import { useState, useEffect, useRef } from "react";
import { rgbToHex } from "../functions";

export const ColorBoxMix = ({color, percent, shade, desc}) => {
  const [hexCode, setHexCode] = useState();
  const boxRef = useRef(null);

  const calculateHex = () => {
    const col = getComputedStyle(boxRef.current).backgroundColor
    //const col = getComputedStyle(e.target).backgroundColor
    const rgb = col.split(' ');
    const r = +rgb[1];
    const g = +rgb[2];
    const b = +rgb[3].slice(0, -1);
    const temp = rgbToHex(r*255, g*255, b*255);
    setHexCode(temp);
  }

  useEffect(() => {
    calculateHex();
  }, [color])

  return (
    <div className="color-box_container">
      <div>{desc}</div>
      <div className="color-box" ref={boxRef} style={{backgroundColor: `color-mix(in srgb, ${color} ${percent}%, ${shade})`}}></div>
      <div>{hexCode}</div>
    </div>
  )
}