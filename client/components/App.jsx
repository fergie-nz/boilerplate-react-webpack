import React, { useState } from 'react'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Header/>}></Route>
      </Routes>

    </>
  )
}

export default App
