import React, { useState } from 'react'

import Header from './Header'
import Controls from './Controls'
import Grid from './Grid'

const App = () => {
  console.log('app called')

  return (
    <div>
      <Header/>
      <Controls/>
      <Grid/>
    </div>
  )
}

export default App
