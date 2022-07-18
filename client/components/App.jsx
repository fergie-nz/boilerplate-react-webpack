import React, { useEffect, useState } from 'react'

import Header from './Header'
import Controls from './Controls'
import Grid from './Grid'

const App = () => {
  console.log('app called')

  const [savedShapes, setSavedShapes] = useState(false)
  useEffect(()=> {
    getShape()
  }, [])
  function getShape() {
    fetch('local://')
  }

  return (
    <div>
      <Header/>
      <Controls/>
      <Grid/>
    </div>
  )
}

export default App
