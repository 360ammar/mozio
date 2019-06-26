import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Main from './Main'
import { store } from './ReduxStore'
import { BrowserRouter } from 'react-router-dom'

const Node: HTMLElement | null = document.getElementById('app')

if (Node) {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>,
    Node
  )
}
