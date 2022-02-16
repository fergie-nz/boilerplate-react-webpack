import React from 'react'
import store from '../store'

import Tile from './Tile'

function Grid () {

  const state = store.getState()
  const grid = state.state


  
  
  
  // console.log(grid)

  // console.log(grid)

  return (
    <div className='boardSpace'>
      {grid.map((row) => {
        return (
          <div className='grid-row'>
              {row.map((tile) => {
                // console.log(tile.key)
              return <Tile
                living={tile.living}
                coord={tile.coord}
                />
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Grid