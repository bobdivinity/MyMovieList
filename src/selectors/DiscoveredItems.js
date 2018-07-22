import { createSelector } from 'reselect'

const getDiscoveredList = (state, props) => {
  return state.discover[props.type].content
}

export const getDiscoveredItems = createSelector(
  getDiscoveredList,
  (discoveredList) => {
    return discoveredList
  }
)
