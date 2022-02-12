import React from "react"

const Tile = ({living}) => {

  const tile = 'tile'
  
  let n = ''
  if (living) {
    n = 'tileAlive'
  }

  return (
  <div className = {tile + ' ' + n}>
  </div>
  )
}

export default Tile