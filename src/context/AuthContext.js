import AsyncStorage from '@react-native-async-storage/async-storage'

import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { navigate } from '../navigationRef'

const authReducder = ( state, action ) => {
  switch ( action.type ) {
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    case 'signup':
      return { errorMessage: '', token: action.payload }
    default:
      return state
  }
}

const signup = dispatch => async ( { email, password } ) => {
  try {
    const response = await trackerApi.post( '/signup', { email, password } )
    await AsyncStorage.setItem( 'token', response.data.token )
    dispatch( { type: 'signup', payload: response.data.token } )
    navigate( 'TrackList' )
  } catch ( error ) {
    dispatch( { type: 'add_error', payload: 'Something went wrong with signup' } )
  }
}

const signin = ( dispatch ) => {
  return ( { email, password } ) => {

  }
}

const signout = ( dispatch ) => {
  return () => {

  }
}



export const { Provider, Context } = createDataContext(
  authReducder,
  // Actions
  { signin, signout, signup },
  // Initial State
  { token: null, errorMessage: '' }
)