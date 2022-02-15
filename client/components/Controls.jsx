import React from "react"
import store from "../store"
import { stepState } from '../../actions/state'

function Controls () {

  const submitHandler = () => {
    // console.log('clicked')
    store.dispatch(stepState())
  }



  return (
    <>
      <div className='controller-bar'>
        <button onClick={() => submitHandler()}>Step Change</button>
        {/* <button onClick={() => resetState()}>Reset game state</button> */}
      </div>
    </>
  )
}

export default Controls