import { createSelector } from '@reduxjs/toolkit'

const selectProducts = state => state.products

export const selectCollections = createSelector(
    [selectProducts],
    products => products.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => 
        collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => 
        collections ? collections[collectionUrlParam] : null
)

export const selectIsCollectionsFetching = createSelector(
    [selectProducts],
    products => products.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectProducts],
    products => !!products.collections
);