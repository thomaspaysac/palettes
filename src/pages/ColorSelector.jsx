import { useEffect, useState, useCallback } from "react"
import hexToHsl from "hex-to-hsl";
import { createPalette, hslToHex } from "../functions"
import { ColorBox } from "../components/ColorBox"
import { Palette } from "../components/Palette";
import { PrimaryColors } from "../components/PrimaryColors";
import { AccentColors } from "../components/AccentColors";
import { PaletteMix } from "../components/PaletteMix";
import { GreyPalette } from "../components/GreyPalette";

export const ColorSelector = () => {
  const [baseColor, setBaseColor] = useState('#000000');
  const [complimentaryColor, setComplimentaryColor] = useState('#ffffff');

  const changeColor = (e) => {
    setBaseColor(e.target.value)
    const complimentary = hexToHsl(e.target.value);
    complimentary[0] += 180;
    const temp = hslToHex(complimentary[0], complimentary[1], complimentary[2]);
    setComplimentaryColor(temp);
  }

  const updatePalette = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries());
    const color = data.color;
    changeColor(color);
  }

  return (
    <div>
      <form onSubmit={updatePalette}>
        <input type='text' name='color' onChange={changeColor} defaultValue={baseColor} />
        <button type='submit'>Create!</button>
        <ColorBox color={baseColor} />
      </form>
      <PaletteMix name={'Primary'} base={baseColor} />
      <PaletteMix name={'Accent'} base={complimentaryColor} />
      <PaletteMix name={'Greys'} base={'#bcbcbc'} />
      <GreyPalette name={'Greys 2'} base={baseColor} />
      <PaletteMix name={'Error'} base={'#ff0000'} />
    </div>
  )
}


