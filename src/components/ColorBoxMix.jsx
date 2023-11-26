export const ColorBoxMix = ({color, percent, shade, desc}) => {
  return (
    <div className="color-box_container">
      <div className="color-box" style={{backgroundColor: `color-mix(in srgb, ${color} ${percent}%, ${shade})`}}></div>
      <div>{desc}</div>
    </div>
  )
}