import React from "react"
import store from "../store"
import { toggleTile } from "../../actions/state"
import { iGrid } from '../../actions/state'

const Tile = ({living, coord}) => {
  // console.log(living)
  // console.log(coord)

  const clickHandler = (coord) => {
    let i = coord.row
    let j = coord.col
    store.dispatch(toggleTile(i,j))
    console.log(coord)

    let state = store.getState()
    let initialGrid = state.state
    store.dispatch(iGrid(initialGrid))
  }

  const tile = 'tile'
  
  let n = ''
  if (living) {
    n = 'tileAlive'
  }

  return (
  <div onClick={() => clickHandler(coord)} className = {tile + ' ' + n} key={coord}>
  </div>
  )
}

export default Tile