import { useEffect, useState, useCallback } from "react"
import hexToHsl from "hex-to-hsl";
import { createPalette, hslToHex } from "../functions"
import { Header } from "../components/Header";
import { ColorBox } from "../components/ColorBox"
import { PaletteMix } from "../components/PaletteMix";
import { GreyPalette } from "../components/GreyPalette";

export const ColorSelector = () => {
  const [baseColor, setBaseColor] = useState('#000000');
  const [complementaryColor, setcomplementaryColor] = useState('#ffffff');

  const changeColor = (e) => {
    setBaseColor(e.target.value)
    const complementary = hexToHsl(e.target.value);
    complementary[0] += 180;
    const temp = hslToHex(complementary[0], complementary[1], complementary[2]);
    setcomplementaryColor(temp);
  }

  const updatePalette = (e) => {
    e.preventDefault();
    /*const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries());
    const color = data.color;
    changeColor(color);*/
    const hsl = hexToHsl(baseColor);
    document.getElementById('header').style.backgroundColor = baseColor;
    document.getElementById('content').style.backgroundColor = `color-mix(in srgb, #f8f8f8 95%, ${baseColor})`
    document.querySelectorAll('.accent-element').forEach(el => {
      el.style.backgroundColor = complementaryColor;
    })
    if (hsl[2] < 50) {
      document.getElementById('header-title').style.color = '#ffffff';
    } else {
      document.getElementById('header-title').style.color = '#000000';
    }
  }

  return (
    <>
      <Header />
      <main id="content">
        <div>
          <form onSubmit={updatePalette}>
            <input type='text' name='color' id='color' onChange={changeColor} defaultValue={baseColor} />
            <button type='submit' className="accent-element">Create!</button>
            <ColorBox color={baseColor} />
          </form>
          <PaletteMix name={'Primary'} base={baseColor} />
          <PaletteMix name={'Accent'} base={complementaryColor} />
          <PaletteMix name={'Neutral'} base={'#bcbcbc'} />
          <GreyPalette name={'Primary Greys'} base={baseColor} />
          <PaletteMix name={'Error'} base={'#ff0000'} />
        </div>
      </main>
    </>
    
  )
}


