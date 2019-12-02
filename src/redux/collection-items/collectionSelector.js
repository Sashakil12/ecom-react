import { createSelector } from 'reselect'
const selectState = state => state

const selectCollections = createSelector(
    [selectState],
    state => state.collections
)

export default selectCollections;