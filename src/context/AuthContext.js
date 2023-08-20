import createDataContext from './createDataContext'

const authReducder = ( state, action ) => {

  switch ( action.type ) {
    default:
      return state
  }

}

export const { Provider, Context } = createDataContext(
  authReducder,
  {},
  { isSignedIn: false }
)