import React from 'react'
import store from '../store'

function Grid () {

  const tile = <div className = 'tile'></div>
  const tileAlive = <div className = 'tileAlive'></div>

  const state = store.getState()

  var grid = []
  for (let i=0; i<state.length;i++) {
    for (let j = 0; j<state[0].length; j++) {
      grid[i][j] = tile
      if (state[i][j] == true) {
        grid[i][j] = tileAlive
      }
    }
  }
  return (
    <div className='grid-border'>
      <div className='grid'>
        {grid.map(())}
      </div>
      {/* <div className="grid">
        {grid.map((row, rowId) => {
          return (
            <div key={rowId}>
              {row.map((node, nodeId) => {
                return (
                  <Node></Node>
                )
        })}
      </div> */}
    </div>
  )
}

export default Grid