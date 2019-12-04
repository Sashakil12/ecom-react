import { createSelector } from 'reselect'
const selectState = state => state.shop


const selectCollections = createSelector(
    [selectState],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParams =>
   ( createSelector(
        [selectCollections],
        collections => collections[collectionUrlParams]))
