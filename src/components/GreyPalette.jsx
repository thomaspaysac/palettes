import { useState, useEffect } from "react"
import { ColorBoxMix } from "./ColorBoxMix"

export const GreyPalette = ({name, base, size}) => {
  const [update, setUpdate] = useState();
  useEffect(() => {
    setUpdate(update+1);
  }, [])

  return (
    <div className="palette">
      <h3>{name}</h3>
      <div className="row">
        <ColorBoxMix color={'#bcbcbc'} percent={'100'} shade={base} desc={'50'} /> 
        <ColorBoxMix color={'#bcbcbc'} percent={'90'} shade={base} desc={'100'} /> 
        <ColorBoxMix color={'#bcbcbc'} percent={'80'} shade={base} desc={'200'} /> 
        <ColorBoxMix color={'#bcbcbc'} percent={'70'} shade={base} desc={'300'} /> 
        <ColorBoxMix color={'#bcbcbc'} percent={'60'} shade={base} desc={'400'} /> 
        <ColorBoxMix color={'#777777'} percent={'40'} shade={base} desc={'500'} /> 
        <ColorBoxMix color={'#000000'} percent={'30'} shade={base} desc={'600'} /> 
        <ColorBoxMix color={'#000000'} percent={'50'} shade={base} desc={'700'} /> 
        <ColorBoxMix color={'#000000'} percent={'70'} shade={base} desc={'800'} /> 
        <ColorBoxMix color={'#000000'} percent={'80'} shade={base} desc={'900'} />
        <ColorBoxMix color={'#000000'} percent={'90'} shade={base} desc={'950'} /> 
      </div>
    </div>
  )
}