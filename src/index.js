import React from 'react'
import ReactDom from 'react-dom'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer/index'

import App from './component/App'

ReactDom.render(
  <Provider
    store={createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <App />
  </Provider>,

  document.getElementById("root")
);