import { useState, useEffect } from "react"
import { createPalette } from "../functions"
import { ColorBox } from "./ColorBox"


export const Palette = ({name, base, length}) => {
  const [palette, setPalette] = useState({})

  const updatePalette = () => {
    if (!base) {
      return
    }
    const hsl = base.split(',');
    let h = +hsl[0].replace(/[^0-9]/g, '');
    let s = +hsl[1].replace(/[^0-9]/g, '');
    let l = +hsl[2].replace(/[^0-9]/g, '');
    const newPalette = {
      base: `hsl(${h}, ${s}%, ${l}%)`,
      darker10: `hsl(${h + 1}, ${s - 3}%, ${l - 10}%)`,
      darker20: `hsl(${h + 3}, ${s - 7}%, ${l - 25}%)`,
      darker30: `hsl(${h + 3}, ${s + 1}%, ${l - 39}%)`,
      darker40: `hsl(${h + 4}, ${s + 13}%, ${l - 51}%)`,
      lighter10: `hsl(${h - 6}, ${s + 4}%, ${l + 7}%)`,
      lighter20: `hsl(${h - 12}, ${s + 3}%, ${l + 14}%)`,
      lighter30: `hsl(${h - 14}, ${s}%, ${l + 17}%)`,
      lighter40: `hsl(${h - 20}, ${s +12}%, ${l + 21}%)`,
      complimentary: `hsl(${h+180}, ${s}%, ${l}%)`
    }
    setPalette(newPalette);
  }

  useEffect(() => {
    updatePalette()
  }, [base])

  if (!base) {
    return null
  }

  if (!length) {
    return (
      <div>
        <h3>{name}</h3>
        <div className="row">
          <ColorBox color={palette.lighter40} desc={100} />
          <ColorBox color={palette.lighter30} desc={200} />
          <ColorBox color={palette.lighter20} desc={300} />
          <ColorBox color={palette.lighter10} desc={400} />
          <ColorBox color={palette.base} desc={'500 (base)'} />
          <ColorBox color={palette.darker10} desc={600} />
          <ColorBox color={palette.darker20} desc={700} />
          <ColorBox color={palette.darker30} desc={800} />
          <ColorBox color={palette.darker40} desc={900} />
        </div>
      </div>
    )
  }
  
  if (length === "small") {
    return (
      <div>
        <h3>{name}</h3>
        <div className="row">
          <ColorBox color={palette.lighter40} desc={100} />
          <ColorBox color={palette.lighter20} desc={300} />
          <ColorBox color={palette.base} desc={'500 (base)'} />
          <ColorBox color={palette.darker20} desc={700} />
          <ColorBox color={palette.darker40} desc={900} />
        </div>
      </div>
    )
  }
  
}