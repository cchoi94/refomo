import { UPDATE_USER, LOGOUT_USER, SHOW_ERROR } from '../actions/user-actions'

const userReducer = (state = null, {type, payload}) => {
  switch(type) {
    case UPDATE_USER:
      return {
        email: payload.email,
        token: payload.token
      };
    case LOGOUT_USER:
      return payload
    case SHOW_ERROR:
      return {
        error: payload.error
      }
    default: return state
  }
}

export default userReducer