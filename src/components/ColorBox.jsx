export const ColorBox = ({color, desc}) => {
  return (
    <div>
      <div className="color-box" style={{backgroundColor: color}}></div>
      <div>{desc}</div>
      <div>{color}</div>
    </div>
    
  )
}