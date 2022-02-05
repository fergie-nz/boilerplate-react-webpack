export const STEP_STATE = 'STEP_STATE'
export const TOGGLE_TILE = 'TOGGLE_TILE'

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

