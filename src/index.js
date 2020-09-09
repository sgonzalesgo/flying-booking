import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './redux/store'
import App from './App'

import '../public/css/main.css'

const rootElement = document.getElementById('react-root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)


