import React from "react"
import store from "../store"
import { stepState } from '../../actions/state'
import { clearBoard } from '../../actions/state'
import functions from '../../functions'
import { resetState } from '../../actions/state'

function Controls () {

  const [shapes, setShapes] = useState(false)

    useEffect(() => {
        getShapes()
    }, [])
    function getShapes() {
        fetch('http://localhost:3001')
        .then(response => {
            return response.text()
        })
        .then(data => {
            setShapes(data)
        })
    }
    function createShape() {
        let name = prompt('enter shape name')
        let array = prompt('enter shape array')
        fetch('http://localhost:3001/shapes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, array})
        })
        .then(data => {
            alert(data)
            getShapes()
        })
    }

  const submitHandler = () => {
    // console.log('clicked')
    let state = store.getState()
    let initialGrid = state.state
    // console.log('function called')

    store.dispatch(stepState())
  }

  const resetToSaved = () => {
      let state = store.getState()
      let savedGrid = state.savedState
      store.dispatch(resetState(savedGrid))
  }

  const cleanBoard = () => {
    store.dispatch(clearBoard())
  }

  const saveBoardState = () => {
    let state = store.getState()
    console.log(state)
    console.log('saving board state function called')
    return
  }



  return (
      <div className='controller-bar'>
        <button className="button" onClick={() => submitHandler()}>Step Change</button>
        <button className="button" onClick={() => resetToSaved()}>Reset to last edit</button>
        <button className="button" onClick={() => cleanBoard()}>Clear board</button>
        <button className="button" onClick={() => createShape()}>save board state</button>
      </div>
  )
}

export default Controls