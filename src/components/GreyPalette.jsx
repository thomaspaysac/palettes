import { useState, useEffect } from "react"
import { ColorBoxMix } from "./ColorBoxMix"

export const GreyPalette = ({name, base, size}) => {
  return (
    <div className="palette">
      <h3>{name}</h3>
      <div className="row">
        <ColorBoxMix color={'#f8f8f8'} percent={'95'} shade={base} desc={'50'} /> 
        <ColorBoxMix color={'#f1f1f1'} percent={'95'} shade={base} desc={'100'} /> 
        <ColorBoxMix color={'#e4e4e4'} percent={'95'} shade={base} desc={'200'} /> 
        <ColorBoxMix color={'#d6d6d6'} percent={'95'} shade={base} desc={'300'} /> 
        <ColorBoxMix color={'#c9c9c9'} percent={'95'} shade={base} desc={'400'} /> 
        <ColorBoxMix color={'#bcbcbc'} percent={'95'} shade={base} desc={'500'} /> 
        <ColorBoxMix color={'#969696'} percent={'95'} shade={base} desc={'300'} /> 
        <ColorBoxMix color={'#707070'} percent={'95'} shade={base} desc={'700'} /> 
        <ColorBoxMix color={'#4b4b4b'} percent={'95'} shade={base} desc={'800'} />
        <ColorBoxMix color={'#252525'} percent={'95'} shade={base} desc={'900'} /> 
        <ColorBoxMix color={'#121212'} percent={'95'} shade={base} desc={'950'} /> 
      </div>
    </div>
  )
}