// const uuidv4 = require('uuid/v4');
import { constants } from '../constants'
import { Dispatch } from 'react-redux'
import axios from 'axios'
import data from '../../data/countries.json'

const getName = (name: string, context: string) => {
  const request = () => ({ type: constants.GET_NAME_REQUEST })
  const success = locations => ({ type: constants.GET_NAME_SUCCESS, locations })
  const failure = err => ({ type: constants.GET_NAME_FAILURE, err })

  return (dispatch: Dispatch) => {
    dispatch(request())
    let result = data.filter(country => country.name.includes(name))
    if (result.length > 0) {
      return dispatch(
        success({
          predictions:
            name.length > 1 ? result.map(location => location.name) : [],
          context
        })
      )
    } else {
      return dispatch(failure('No Results found!'))
    }
  }
}

const updateContext = (context: string) => {
  return (dispatch: Dispatch) => {
    return dispatch({ type: 'UPDATE_CONTEXT' })
  }
}

const calculateDistance = ({ origin, destination, date, passengers }) => {
  const request = () => ({ type: constants.GET_DISTANCE_REQUEST })
  const success = distance => ({
    type: constants.GET_DISTANCE_SUCCESS,
    distance
  })
  const failure = err => ({ type: constants.GET_DISTANCE_FAILURE, err })

  return (dispatch: Dispatch) => {
    dispatch(request())
    axios
      .get(
        `https://www.distance24.org/route.json?stops=${origin}|${destination}`,
        { crossdomain: true }
      )
      .then(({ data }) => {
        const { distance } = data
        return dispatch(
          success({ origin, destination, date, passengers, distance })
        )
      })
      .catch(err => {
        return dispatch(failure(err))
      })
  }
}

export const actions = {
  getName,
  calculateDistance,
  updateContext
}
