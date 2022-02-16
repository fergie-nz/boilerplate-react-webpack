export const STEP_STATE = 'STEP_STATE'
export const TOGGLE_TILE = 'TOGGLE_TILE'
export const INITIAL_GRID = 'INITIAL_GRID'
export const RESET_GRID = 'RESET_GRID'
export const CLEAR_BOARD = 'CLEAR_BOARD'

export const stepState = () => {
  return {
    type: STEP_STATE
  }
}

export const toggleTile = (i,j) => {
  return {
    type: TOGGLE_TILE,
    i,
    j
  }
}

export const iGrid = (grid) => {
  return {
    type: INITIAL_GRID,
    grid
  }
}

export const resetState = (savedState) => {
  return {
    type: RESET_GRID,
    savedState
  }
}

export const clearBoard = () => {
  return {
    type: CLEAR_BOARD,
  }
}



// export const resetState = () => {}

