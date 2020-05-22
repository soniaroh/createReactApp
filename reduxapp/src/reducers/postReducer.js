import * as actions from '../actions/type';

const initialState = {
  items : [],
  item: {}
}
export default function (state=initialState, action) {
  switch(action.type) {
    case actions.FETCH_POSTS:
    return {
      ...state,
      items: action.payload
    };
    case actions.NEW_POSTS:
    return {
      ...state,
      item: action.payload
    };
    default:
    return state
  }
}