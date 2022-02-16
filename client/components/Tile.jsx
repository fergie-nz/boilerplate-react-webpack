import React from "react"
import store from "../store"
import { toggleTile } from "../../actions/state"
import { iGrid } from '../../actions/state'

const Tile = ({living, coord}) => {
  // console.log(living)
  // console.log(coord)

  const clickHandler = (coord) => {
    let i = coord.charAt(0)
    let j = coord.charAt(1)
    store.dispatch(toggleTile(i,j))

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