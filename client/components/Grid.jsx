import React from 'react'
import store from '../store'

import Tile from './tile'

function Grid () {

  const state = store.getState()
  const grid = state.state
  
  
  // console.log(grid)

  console.log(state)
  console.log(state.state)

  return (
    <div className='grid-border'>
      <div className='boardSpace'>
        {grid.map((row) => {
          return row.map((tile) => {
            return <Tile
              living={tile.living}
              />
          })
        })}
      </div>
    </div>
  )
}

export default Grid