import { useEffect, useState, useCallback } from "react"
import hexToHsl from "hex-to-hsl";
import { createPalette, hslToHex } from "../functions"
import { Header } from "../components/Header";
import { ColorBox } from "../components/ColorBox"
import { PaletteMix } from "../components/PaletteMix";
import { AnalogousPalette } from "../components/AnalogousColors";
import { GreyPalette } from "../components/GreyPalette";

export const ColorSelector = () => {
  const [baseColor, setBaseColor] = useState('#000000');
  const [harmony, setHarmony] = useState();
  const [complementaryColor, setComplementaryColor] = useState('#ffffff');
  const [analogousColors, setAnalogousColors] = useState(['#ffffff', '#ffffff']);
  const [splitComplementaryColors, setSplitComplementaryColors] = useState(['#ffffff', '#ffffff']);
  const [triadicColors, setTriadicColors] = useState(['#ffffff', '#ffffff']);
  const [tetradicColors, setTetradicColors] = useState(['#ffffff', '#ffffff', '#ffffff']);
  const [paletteUpdate, setPaletteUpdate] = useState(false)

  const changeColor = (e) => {
    setBaseColor(e.target.value)
    const base_hsl = hexToHsl(e.target.value);
    const complementary = hslToHex(base_hsl[0] + 180, base_hsl[1], base_hsl[2]);
    setComplementaryColor(complementary);
    const analogous = [hslToHex(base_hsl[0] + 30, base_hsl[1], base_hsl[2]), hslToHex(base_hsl[0] + 60, base_hsl[1], base_hsl[2])]
    setAnalogousColors(analogous);
    const splitComplementary = [hslToHex(base_hsl[0] - 150, base_hsl[1], base_hsl[2]), hslToHex(base_hsl[0] + 150, base_hsl[1], base_hsl[2])];
    setSplitComplementaryColors(splitComplementary);
    const triadic = [hslToHex(base_hsl[0] - 120, base_hsl[1], base_hsl[2]), hslToHex(base_hsl[0] + 120, base_hsl[1], base_hsl[2])];
    setTriadicColors(triadic);
    const tetradic = [hslToHex(base_hsl[0] + 60, base_hsl[1], base_hsl[2]), hslToHex(base_hsl[0] + 180, base_hsl[1], base_hsl[2]), hslToHex(base_hsl[0] + 240, base_hsl[1], base_hsl[2])];
    setTetradicColors(tetradic);
  }

  const updatePalette = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries());
    setHarmony(data.harmony);
    const hsl_base = hexToHsl(baseColor);
    const hsl_complementary = hexToHsl(complementaryColor);
    document.getElementById('header').style.backgroundColor = baseColor;
    document.getElementById('content').style.backgroundColor = `color-mix(in srgb, #f8f8f8 95%, ${baseColor})`
    document.querySelectorAll('.accent-element').forEach(el => {
      el.style.backgroundColor = complementaryColor;
      if (hsl_complementary[2] < 50) {
        el.style.color = '#ffffff'
      } else {
        el.style.color = '#000000'
      }
    })
    if (hsl_base[2] < 50) {
      document.getElementById('header-title').style.color = '#ffffff';
    } else {
      document.getElementById('header-title').style.color = '#000000';
    }
    setPaletteUpdate(true);
  }

  const HarmonyPalettes = ({harmony}) => {
    if (!harmony) {
      return null
    } else if (harmony === 'complementary') {
      return (
        <PaletteMix name={'Accent'} base={complementaryColor} />
      )
    } else if (harmony === 'analogous') {
      return (
        <AnalogousPalette name={'Analogous'} base={analogousColors} />
      )
    } else if (harmony === 'split') {
      return (
        <AnalogousPalette name={'Split complementary'} base={splitComplementaryColors} />
      )
    } else if (harmony === 'triadic') {
      return (
        <AnalogousPalette name={'Triadic'} base={triadicColors} />
      )
    } else if (harmony === 'tetradic') {
      return (
        <AnalogousPalette name={'Tetradic'} base={tetradicColors} />
      )
    }
  }

  const SystemPalettes = () => {
    if (!paletteUpdate) {
      return null
    } else {
      return (
        <>
          <GreyPalette name={'Primary Greys'} base={baseColor} />
          <PaletteMix name={'Neutral'} base={'#bcbcbc'} />
          <PaletteMix name={'Error'} base={'#ff0000'} />
        </>
      )
    }
  }

  return (
    <>
      <header id='header'>
      <h1 id='header-title'>Coolors</h1>
      <div>
        <form id='color-input' onSubmit={updatePalette}>
        <div className="input-form">
          <div className="color-box" style={{backgroundColor: baseColor}}></div>
          <input type='text' name='color' id='color' onChange={changeColor} placeholder={'Color hex code'}  />
          <label htmlFor="harmony">Color harmony: </label>
          <select name='harmony' id='harmony'>
            <option value=''>Monochromatic</option>
            <option value='complementary'>Complementary</option>
            <option value='analogous'>Analogous</option>
            <option value='split'>Split complementary</option>
            <option value='triadic'>Triadic</option>
            <option value='tetradic'>Tetradic</option>
          </select>
        </div>
          
          <button type='submit' className="accent-element">Create palette</button>
        </form>
      </div>
      </header>
      <main id="content">
        <div>
          <PaletteMix name={'Primary'} base={baseColor} />
          <HarmonyPalettes harmony={harmony} />
          <SystemPalettes />
        </div>
      </main>
    </>
    
  )
}


