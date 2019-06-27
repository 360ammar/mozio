import * as React from 'react'
import styled from 'styled-components'
import { BackgroundImage, Container, Search } from '../Components'
import { connect, Dispatch } from 'react-redux'
import { actions } from '../ReduxStore'

class Home extends React.Component<any> {

  componentDidUpdate(prevProps){
    if(prevProps.state.fetchingDistance && Object.keys(this.props.state.distance).length > 0){
      const { history: {push}, state: {distance : { origin, destination, date, passengers, distance }} } = this.props
      push(`/search?origin=${origin}&destination=${destination}&distance=${distance}&date=${date}&passengers=${passengers}`)
    }
  }

  render(): React.Node {
    const {
      location: { search },
      getName,
      state,
      calculateDistance,
      updateContext
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
            updateContext={updateContext}
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
    },
    updateContext: () => {
      dispatch(actions.updateContext())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
