import { useState } from "react"
import { createPalette } from "../functions"
import { ColorBox } from "../components/ColorBox"
import { Palette } from "../components/Palette";
import { PrimaryColors } from "../components/PrimaryColors";
import { AccentColors } from "../components/AccentColors";

export const ColorSelector = () => {
  const [baseColor, setBaseColor] = useState('#000000');
  const [palette, setPalette] = useState({});

  const changeColor = (e) => {
    setBaseColor(e.target.value)
  }

  const updatePalette = (e) => {
    e.preventDefault();
    const newPalette = createPalette(baseColor);
    setPalette(newPalette);
    console.log(newPalette)
  }

  return (
    <div>
      <form onSubmit={updatePalette}>
        <input type='text' onChange={changeColor} defaultValue={baseColor} />
        <button type='submit'>Create!</button>
        <ColorBox color={baseColor} />
      </form>
      <PrimaryColors base={baseColor} />
      <Palette name={'Accent'} base={palette.complimentary} />
      <Palette name={'Accent short'} base={palette.complimentary} length={"small"} />
    </div>
  )
}