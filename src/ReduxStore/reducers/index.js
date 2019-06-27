import { constants } from '../constants'
import { State, Action } from 'react-redux'



function travelData(state: State = {
  fetchingLocations : false,
  fetchingLocationErr: '',
  locations: [],

   fetchingDistance : false,
  fetchingDistanceErr: {},
  distance: {}
}, action: Action) {
  switch (action.type) {
    case constants.GET_NAME_REQUEST:
      return {
        ...state,
        fetchingLocations: true
      }

    case constants.GET_NAME_SUCCESS:
      return {
        ...state,
        fetchingLocations: false,
        locations: action.locations.predictions,
        context: action.locations.context
      }

    case constants.GET_NAME_FAILURE:
      return {
        ...state,
        fetchingLocations: false,
        fetchingLocationErr: action.err
      }


        case constants.GET_DISTANCE_REQUEST:
      return {
        ...state,
        fetchingDistance: true
      }

    case constants.GET_DISTANCE_SUCCESS:
      return {
        ...state,
        fetchingDistance: false,
        distance: action.distance
      }

    case constants.GET_DISTANCE_FAILURE:
      return {
        ...state,
        fetchingDistance: false,
        fetchingDistanceErr: action.err
      } 
    case "UPDATE_CONTEXT":
      return {
        ...state,
        context: ''
      }   

    default:
      return state;
  }
}


export default travelData