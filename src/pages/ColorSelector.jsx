import { useState } from "react"
import hexToHsl from "hex-to-hsl";
import { createPalette, hslToHex } from "../functions"
import { ColorBox } from "../components/ColorBox"
import { Palette } from "../components/Palette";
import { PrimaryColors } from "../components/PrimaryColors";
import { AccentColors } from "../components/AccentColors";
import { PaletteMix } from "../components/PaletteMix";

export const ColorSelector = () => {
  const [baseColor, setBaseColor] = useState('#000000');
  const [complimentaryColor, setComplimentaryColor] = useState('#ffffff');

  const changeColor = (color) => {
    setBaseColor(color)
    const complimentary = hexToHsl(color);
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
        <input type='text' name='color' defaultValue={baseColor} />
        <button type='submit'>Create!</button>
        <ColorBox color={baseColor} />
      </form>
      <PaletteMix name={'Primary'} base={baseColor} />
      <PaletteMix name={'Accent'} base={complimentaryColor} size={'small'} />
      <PaletteMix name={'Greys'} base={'#bcbcbc'} />
    </div>
  )
}


