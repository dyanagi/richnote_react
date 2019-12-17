import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './store/reducers/rootReducer'

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)

ReactDOM.render(<Provider store={store}><App /></Provider>,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

// // About Middleware:
// // If implement a simple logger middleware, it would look like...
// function patchStoreToLog (store) {
//   const next = store.dispatch
//   store.dispatch = function dispatchAndLog (action) {
//     console.log('dispatching', action)
//     const result = next(action)
//     console.log('next state', store.getState())
//     return result
//   }
// }

// patchStoreToLog(store)
