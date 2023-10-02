import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import shoppingStore from './components/redux/shoppingStore'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={shoppingStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)
