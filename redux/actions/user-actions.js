import axios from '../../components/Requests/axiosInstance'

export const UPDATE_USER = 'user:updateUser'
export const LOGOUT_USER = 'user:logoutUser'
export const SHOW_ERROR = 'user:updateError'

export const updateUser = (newUserData) => {
  return {
    type: UPDATE_USER,
    payload: {
      email: newUserData.email,
      token: newUserData.token
    }
  }
}

export const showError = (error) => {
  return {
    type: SHOW_ERROR,
    payload: {
      error
    }
  }
}

export const loginUser = (email, password) => {
  return dispatch => {
    axios.post('/api/users/login', {
      email,
      password
    }).then(response => {
      console.log(response)
      dispatch(updateUser({
        email,
        token: response.data.token
      }))
    }, error => {
      dispatch(showError(error))
    })
  }
}

export const signupUser = (email, password) => {
  return dispatch => {
    axios.post('/api/users/signup', {
      email,
      password
    }).then(response => {
      dispatch(loginUser(
        email,
        password
      ))
    }, error => {
      dispatch(showError(error))
    })
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
    payload: null
  }
}