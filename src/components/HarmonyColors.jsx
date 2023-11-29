import { ColorBoxMix } from "./ColorBoxMix"

export const HarmonyColors = ({name, base, size}) => {
  if (size === 'small') {
    return (
      <div className="palette">
        <h3>{name}</h3>
        <div className="row">
        <ColorBoxMix color={base} percent={'20'} shade={'#ffffff'} desc={'100'} /> 
        <ColorBoxMix color={base} percent={'60'} shade={'#ffffff'} desc={'300'} /> 
        <ColorBoxMix color={base} percent={'100'} shade={'#ffffff'} desc={'500'} /> 
        <ColorBoxMix color={base} percent={'60'} shade={'#000000'} desc={'700'} /> 
        <ColorBoxMix color={base} percent={'20'} shade={'#000000'} desc={'900'} />
        </div>
      </div>
    )  
  }

  const Palettes = () => {
    return(
      base.map((el, i) => {
        return (
          <div className="row" key={el +'_' + i}>
            <ColorBoxMix color={el} percent={'10'} shade={'#ffffff'} desc={'50'} /> 
            <ColorBoxMix color={el} percent={'20'} shade={'#ffffff'} desc={'100'} /> 
            <ColorBoxMix color={el} percent={'40'} shade={'#ffffff'} desc={'200'} /> 
            <ColorBoxMix color={el} percent={'60'} shade={'#ffffff'} desc={'300'} /> 
            <ColorBoxMix color={el} percent={'80'} shade={'#ffffff'} desc={'400'} /> 
            <ColorBoxMix color={el} percent={'100'} shade={'#ffffff'} desc={'500'} /> 
            <ColorBoxMix color={el} percent={'80'} shade={'#000000'} desc={'600'} /> 
            <ColorBoxMix color={el} percent={'60'} shade={'#000000'} desc={'700'} /> 
            <ColorBoxMix color={el} percent={'40'} shade={'#000000'} desc={'800'} /> 
            <ColorBoxMix color={el} percent={'20'} shade={'#000000'} desc={'900'} />
            <ColorBoxMix color={el} percent={'10'} shade={'#000000'} desc={'950'} /> 
          </div>
        )
      })
    )
    
  }

  return (
    <div className="palette" style={{'borderLeft': '16px solid' + base[0]}}>
      <h3>{name}</h3>
      <Palettes/>
    </div>
  )

  /*return (
    <div className="palette">
      <h3>{name}</h3>
      <div className="row">
        <ColorBoxMix color={base[0]} percent={'10'} shade={'#ffffff'} desc={'50'} /> 
        <ColorBoxMix color={base[0]} percent={'20'} shade={'#ffffff'} desc={'100'} /> 
        <ColorBoxMix color={base[0]} percent={'40'} shade={'#ffffff'} desc={'200'} /> 
        <ColorBoxMix color={base[0]} percent={'60'} shade={'#ffffff'} desc={'300'} /> 
        <ColorBoxMix color={base[0]} percent={'80'} shade={'#ffffff'} desc={'400'} /> 
        <ColorBoxMix color={base[0]} percent={'100'} shade={'#ffffff'} desc={'500'} /> 
        <ColorBoxMix color={base[0]} percent={'80'} shade={'#000000'} desc={'600'} /> 
        <ColorBoxMix color={base[0]} percent={'60'} shade={'#000000'} desc={'700'} /> 
        <ColorBoxMix color={base[0]} percent={'40'} shade={'#000000'} desc={'800'} /> 
        <ColorBoxMix color={base[0]} percent={'20'} shade={'#000000'} desc={'900'} />
        <ColorBoxMix color={base[0]} percent={'10'} shade={'#000000'} desc={'950'} /> 
      </div>
      <div className="row">
        <ColorBoxMix color={base[1]} percent={'10'} shade={'#ffffff'} desc={'50'} /> 
        <ColorBoxMix color={base[1]} percent={'20'} shade={'#ffffff'} desc={'100'} /> 
        <ColorBoxMix color={base[1]} percent={'40'} shade={'#ffffff'} desc={'200'} /> 
        <ColorBoxMix color={base[1]} percent={'60'} shade={'#ffffff'} desc={'300'} /> 
        <ColorBoxMix color={base[1]} percent={'80'} shade={'#ffffff'} desc={'400'} /> 
        <ColorBoxMix color={base[1]} percent={'100'} shade={'#ffffff'} desc={'500'} /> 
        <ColorBoxMix color={base[1]} percent={'80'} shade={'#000000'} desc={'600'} /> 
        <ColorBoxMix color={base[1]} percent={'60'} shade={'#000000'} desc={'700'} /> 
        <ColorBoxMix color={base[1]} percent={'40'} shade={'#000000'} desc={'800'} /> 
        <ColorBoxMix color={base[1]} percent={'20'} shade={'#000000'} desc={'900'} />
        <ColorBoxMix color={base[1]} percent={'10'} shade={'#000000'} desc={'950'} /> 
      </div>
    </div>
  )*/
}