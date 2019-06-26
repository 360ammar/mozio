// @flow

import * as React from 'react'
import { Home, SearchPage } from './Containers'
import { Container, NavBar } from './Components'
import { createGlobalStyle } from 'styled-components'
import { Route, Switch } from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
  }
`

export default class Main extends React.Component<any> {
  render(): React.Node {
    return (
      <React.Fragment>
        <GlobalStyle />
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/search' component={SearchPage} />
          <Route path='/*' component={() => 'NOT FOUND'} />
        </Switch>
      </React.Fragment>
    )
  }
}
