import axios from '../../components/Requests/axiosInstance'
export const SELECTED_REFPOST = 'refpost:updatedSelectedRefpost'
export const ALL_REFPOSTS = 'refpost:setAllRefPosts'
export const SHOW_ERROR = 'refpost:showError'

export const updateSelectedRefPost = (refPost) => {
  return {
    type: SELECTED_REFPOST,
    payload: {
      refPost
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

export const setAllRefPosts = (refPosts) => {
  return {
    type: ALL_REFPOSTS,
    payload: {
      refPosts
    }
  }
}

export const getRefPosts = () => {
  return dispatch => {
    axios.get('/api/refPosts').then(response => {
      console.log(response)
      dispatch(setAllRefPosts(response.data.refPosts))
    }, error => {
      console.log(error)
      dispatch(showError(error))
    })
  }
}

export const postNewRefPost = (postData, userToken) => {
  // return dispatch => {
  //   console.log(postData, userToken)
  // }
  return dispatch => {
    axios({
      method: 'post',
      url: '/api/refPosts',
      headers: {
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${userToken}`
      },
      data: postData
    }).then(result => {
      console.log(result)
    }, error => {
      console.log(error)
    })
  }
}