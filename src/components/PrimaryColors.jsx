import { useState, useEffect } from "react"
import { createPalette } from "../functions"
import { ColorBox } from "./ColorBox"

export const PrimaryColors = ({base}) => {
  const [palette, setPalette] = useState({})

  const updatePalette = () => {
    if (!base) {
      return
    }
    const newPalette = createPalette(base);
    setPalette(newPalette);
  }

  useEffect(() => {
    updatePalette()
  }, [base])

  return (
    <div>
      <h3>Primary colors</h3>
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