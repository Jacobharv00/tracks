import AsyncStorage from '@react-native-async-storage/async-storage'

import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { navigate } from '../navigationRef'

const authReducder = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    case 'signin':
      return { errorMessage: '', token: action.payload }
    case 'clear_error_message':
      return { ...state, errorMessage: '' }
    case 'signout':
      return { token: null, errorMessage: '' }
    default:
      return state
  }
}

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password })
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({ type: 'signin', payload: response.data.token })
    navigate('TrackList')
  } catch (error) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with signup' })
  }
}

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signin', { email, password })
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({ type: 'signin', payload: response.data.token })
    navigate('TrackList')
  } catch (error) {
    dispatch({ type: 'add_error', payload: 'Something went wrong with signin' })
  }
}


const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token')
  dispatch({ type: 'signout' })
  navigate('loginFlow')
}

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token')

  if (token) {
    dispatch({ type: 'signin', payload: token })
    navigate('TrackList')
  } else {
    navigate('loginFlow')
  }
}

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message', })
}

export const { Provider, Context } = createDataContext(
  authReducder,
  // Actions
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  // Initial State
  { token: null, errorMessage: '' }
)