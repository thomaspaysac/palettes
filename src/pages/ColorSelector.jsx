import { useState } from "react"
import { ColorBox } from "../components/ColorBox"
import { PrimaryColors } from "../components/PrimaryColors";
import { AccentColors } from "../components/AccentColors";

export const ColorSelector = () => {
  const [baseColor, setBaseColor] = useState('#000000');
  const [palette, setPalette] = useState({});

  const percentage = (value, percentage) => {
    if (value === 0) {
      return percentage
    } else {
      return percentage - (value / 100 * percentage)
    }
  }

  const hexToHSL = (H) => {
    // Convert hex to RGB first
    let r = 0, g = 0, b = 0;
    if (H.length == 4) {
      r = "0x" + H[1] + H[1];
      g = "0x" + H[2] + H[2];
      b = "0x" + H[3] + H[3];
    } else if (H.length == 7) {
      r = "0x" + H[1] + H[2];
      g = "0x" + H[3] + H[4];
      b = "0x" + H[5] + H[6];
    }
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r,g,b),
        cmax = Math.max(r,g,b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;
  
    if (delta == 0)
      h = 0;
    else if (cmax == r)
      h = ((g - b) / delta) % 6;
    else if (cmax == g)
      h = (b - r) / delta + 2;
    else
      h = (r - g) / delta + 4;
  
    h = Math.round(h * 60);
  
    if (h < 0)
      h += 360;
  
    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    return {
      base: `hsl(${h}, ${s}%, ${l}%)`,
      darker10: `hsl(${h - 5}, ${s + percentage(s,10)}%, ${l - percentage(l,20)}%)`,
      darker20: `hsl(${h - 10}, ${s + percentage(s,15)}%, ${l - percentage(l,40)}%)`,
      darker30: `hsl(${h - 15}, ${s + percentage(s,20)}%, ${l - percentage(l,60)}%)`,
      darker40: `hsl(${h - 20}, ${s + percentage(s,25)}%, ${l - percentage(l,80)}%)`,
      lighter10: `hsl(${h + 5}, ${s - percentage(s,10)}%, ${l + percentage(l,25)}%)`,
      lighter20: `hsl(${h + 10}, ${s - percentage(s,15)}%, ${l + percentage(l,50)}%)`,
      lighter30: `hsl(${h + 15}, ${s - percentage(s,20)}%, ${l + percentage(l,75)}%)`,
      lighter40: `hsl(${h + 20}, ${s - percentage(s,25)}%, ${l + percentage(l,100)}%)`,
      complimentary: `hsl(${h+180}, ${s}%, ${l+20}%)`
    }
    /*return {
      base: `hsl(${h}, ${s}%, ${l}%)`,
      darker10: `hsl(${h-5}, ${s + 10}%, ${l - 10}%)`,
      darker20: `hsl(${h-10}, ${s + 20}%, ${l - 20}%)`,
      darker30: `hsl(${h-15}, ${s + 30}%, ${l - 30}%)`,
      darker40: `hsl(${h-20}, ${s + 40}%, ${l - 40}%)`,
      lighter10: `hsl(${h+5}, ${s - 10}%, ${l + 20}%)`,
      lighter20: `hsl(${h+10}, ${s - 15}%, ${l + 40}%)`,
      lighter30: `hsl(${h+15}, ${s - 20}%, ${l + 60}%)`,
      lighter40: `hsl(${h+20}, ${s - 25}%, ${l + 80}%)`,
      complimentary: `hsl(${h+180}, ${s}%, ${l+20}%)`
    }*/
  }


  const changeColor = (e) => {
    setBaseColor(e.target.value)
  }

  const createPalette = (e) => {
    e.preventDefault();
    const newPalette = hexToHSL(baseColor);
    setPalette(newPalette);
  }

  return (
    <div>
      <form onSubmit={createPalette}>
        <input type='text' onChange={changeColor} defaultValue={baseColor} />
        <button type='submit'>Create!</button>
        <ColorBox color={baseColor} />
      </form>
      <PrimaryColors base={baseColor} />
      <AccentColors base={palette.complimentary} /> 
      <div>{palette.complimentary}</div>
    </div>
  )
}