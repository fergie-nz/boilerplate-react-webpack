import React from "react"

const Tile = ({living, key}) => {

  const tile = 'tile'
  
  let n = ''
  if (living) {
    n = 'tileAlive'
  }

  return (
  <div className = {tile + ' ' + n} key={key}>
  </div>
  )
}

export default Tile