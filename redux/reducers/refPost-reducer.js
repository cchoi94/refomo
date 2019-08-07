import { SELECTED_REFPOST, ALL_REFPOSTS, SHOW_ERROR } from '../actions/refPost-actions'

const refPostReducer = (state = [], {type, payload}) => {
  switch(type) {
    case SELECTED_REFPOST:
      return {
        selectedRefPost: payload.selectedRefPost,
        allRefPosts: payload.allRefPosts
      };
    case ALL_REFPOSTS:
      return payload.refPosts;
    default: return state
  }
}

export default refPostReducer