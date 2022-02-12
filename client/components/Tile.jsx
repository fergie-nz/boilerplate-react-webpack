import React from "react"

const Tile = ({living}) => {

  var state = '0'
  if (living) {
    state = 'X'
  }

  return (
  <div className = {`tile ${living}`}>
    {state}
  </div>
  )
}

export default Tile