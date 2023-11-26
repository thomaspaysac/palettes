import { ColorBoxMix } from "./ColorBoxMix"

export const PaletteMix = ({name, base, size}) => {
  if (size === 'small') {
    return (
      <div>
        <h3>{name}</h3>
        <div className="row">
          <ColorBoxMix color={base} percent={'10'} shade={'#ffffff'} desc={'100'} /> 
          <ColorBoxMix color={base} percent={'50'} shade={'#ffffff'} desc={'300'} /> 
          <ColorBoxMix color={base} percent={'100'} shade={'#ffffff'} desc={'500'} /> 
          <ColorBoxMix color={base} percent={'50'} shade={'#000000'} desc={'700'} /> 
          <ColorBoxMix color={base} percent={'10'} shade={'#000000'} desc={'900'} /> 
        </div>
      </div>
    )  
  }

  return (
    <div>
      <h3>{name}</h3>
      <div className="row">
        <ColorBoxMix color={base} percent={'10'} shade={'#ffffff'} desc={'100'} /> 
        <ColorBoxMix color={base} percent={'25'} shade={'#ffffff'} desc={'200'} /> 
        <ColorBoxMix color={base} percent={'50'} shade={'#ffffff'} desc={'300'} /> 
        <ColorBoxMix color={base} percent={'75'} shade={'#ffffff'} desc={'400'} /> 
        <ColorBoxMix color={base} percent={'100'} shade={'#ffffff'} desc={'500'} /> 
        <ColorBoxMix color={base} percent={'75'} shade={'#000000'} desc={'600'} /> 
        <ColorBoxMix color={base} percent={'50'} shade={'#000000'} desc={'700'} /> 
        <ColorBoxMix color={base} percent={'25'} shade={'#000000'} desc={'800'} /> 
        <ColorBoxMix color={base} percent={'10'} shade={'#000000'} desc={'900'} /> 
      </div>
    </div>
  )
}