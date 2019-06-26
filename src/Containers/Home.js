import * as React from 'react'
import styled from 'styled-components'
import { BackgroundImage, Container, Search } from '../Components'
import { connect, Dispatch } from 'react-redux'
import { actions } from '../ReduxStore'

class Home extends React.Component<any> {
  componentDidMount() {}

  componentDidCatch(err) {
    console.log(err)
  }

  render(): React.Node {
    const {
      location: { search },
      getName,
      state,
      calculateDistance
    } = this.props
    return (
      <React.Fragment>
        <BackgroundImage />
        <Container>
          <Search
            getName={getName}
            search={search}
            state={state}
            calculateDistance={calculateDistance}
          />
        </Container>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return { state }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getName: (name, context) => {
      dispatch(actions.getName(name, context))
    },
    calculateDistance: (origin, destination) => {
      dispatch(actions.calculateDistance(origin, destination))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
