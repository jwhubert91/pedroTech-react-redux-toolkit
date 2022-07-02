import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { changeColor } from "../features/theme"

function ChangeColor() {
  const [color, setColor] = useState("#000")
  const dispatch = useDispatch()
  return (
    <div className="chooseColorContainer">
      <label>
        <span>Enter color:</span>
        <input
          type="text"
          onChange={(e) => setColor(e.target.value)}
          value={color}
        />
      </label>
      <button onClick={() => dispatch(changeColor(color))}>Change Color</button>
    </div>
  )
}

export default ChangeColor
