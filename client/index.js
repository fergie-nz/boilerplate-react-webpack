import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

import store from './store'
import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  render()
  store.subscribe(render)
})

function render () {
  ReactDOM.render(
    <Router>
          <App />
    </Router>,
    document.getElementById('app')
  )
}
