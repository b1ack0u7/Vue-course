
export const increment = ( state ) => {
  state.count ++
  state.lastMutation = 'incremented'
}

export const incrementBy = ( state, val ) => {
  state.count += val
  state.lastMutation = 'incrementedBy'
  state.lastRandomInt = val
}

export const setLoading = ( state, val ) => {
  state.isLoading = val
  state.lastMutation = 'setLoading ' + val
}