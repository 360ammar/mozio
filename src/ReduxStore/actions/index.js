// const uuidv4 = require('uuid/v4');
import { constants } from '../constants'
import { Dispatch } from 'react-redux'
import uuid from 'uuid/v4'
import axios from 'axios'

const SECRET = 'AIzaSyCFJzMTvQ5af42sZUEQf3ZINgOp3uVQ0eo'

const getName = (name: string, context: string) => {
  let uid = uuid()
  const request = () => ({ type: constants.GET_NAME_REQUEST })
  const success = locations => ({ type: constants.GET_NAME_SUCCESS, locations })
  const failure = err => ({ type: constants.GET_NAME_FAILURE, err })

  return (dispatch: Dispatch) => {
    dispatch(request())
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${name}&types=(cities)&key=${SECRET}&sessiontoken=${uid}`,
        { crossdomain: true }
      )
      .then((data, { data: { predictions } }) => {
        console.log(data)
        if (predictions.length > 0)
          return dispatch(
            success({
              predictions: predictions.map(location => location.description),
              context
            })
          )
        return dispatch(success({ predictions, context }))
      })
      .catch(err => {
        return dispatch(failure(err))
      })
  }
}

const calculateDistance = (origin: string, destination: string) => {
  let uid = uuid()
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
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${origin}&destinations=${destination}&key=${SECRET}`,
        { crossdomain: true }
      )
      .then(({ data: { rows } }) => {
        if (rows && rows.length > 0) {
          if (rows[0].elements && rows[0].elements.length > 0) {
            window.location.push(
              `/search?origin=${origin}&destination=${destination}&distance=${
                rows[0].elements[0].distance['text']
              }`
            )
          }
        }

        return dispatch(success(rows))
      })
      .catch(err => {
        return dispatch(failure(err))
      })
  }
}

export const actions = {
  getName,
  calculateDistance
}
