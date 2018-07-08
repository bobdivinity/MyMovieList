import { SAY_HELLO } from '../actions/HelloActions'

let initialState = {
  name: "Antoine"
}

export default function HelloReducers(state = initialState, action) {
  switch (action.type) {
  case SAY_HELLO: {
    const { name } = action
    return {
      ...state,
      name: name
    }
  }
  default:
    return state
  }
}
