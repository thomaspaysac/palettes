import { useState, useEffect } from "react"
import { ColorBox } from "./ColorBox"

export const AccentColors = ({base}) => {
  const [palette, setPalette] = useState()

  const percentage = (value, percentage) => {
    if (value === 0) {
      return percentage
    } else {
      return percentage - (value / 100 * percentage)
    }
  }

  const hexToHSL = () => {

    /*return {
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
    }*/
  }

  const updatePalette = () => {
    if (!base) {
      return
    } else {
      let h = base.split(',')[0].split('(')[1];
      let s = base.split(',')[1].split('%')[0];
      let l = base.split(',')[2].split('%')[0];
      const newPalette = {
        base: `hsl(${h}, ${s}%, ${l}%)`,
        darker10: `hsl(${h - 5}, ${s + percentage(s,10)}%, ${l - percentage(l,20)}%)`,
        darker20: `hsl(${h - 10}, ${s + percentage(s,15)}%, ${l - percentage(l,40)}%)`,
        darker30: `hsl(${h - 15}, ${s + percentage(s,20)}%, ${l - percentage(l,60)}%)`,
        darker40: `hsl(${h - 20}, ${s + percentage(s,25)}%, ${l - percentage(l,80)}%)`,
        lighter10: `hsl(${h + 5}, ${s - percentage(s,10)}%, ${l + percentage(l,25)}%)`,
        lighter20: `hsl(${h + 10}, ${s - percentage(s,15)}%, ${l + percentage(l,50)}%)`,
        lighter30: `hsl(${h + 15}, ${s - percentage(s,20)}%, ${l + percentage(l,75)}%)`,
        lighter40: `hsl(${h + 20}, ${s - percentage(s,25)}%, ${l + percentage(l,100)}%)`,
      }
      setPalette(newPalette);
    }
  }

  useEffect(() => {
    updatePalette()
  }, [base])

  if (!base || !palette) {
    return null
  }

  return (
    <div>
      <h3>Accent colors</h3>
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