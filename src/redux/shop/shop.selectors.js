import {createSelector} from "reselect";

const COLLECTION_ID_MAP = {
    hats: 1, 
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 4
}

const selectShop = (state) => {
    return state.shop
}

export const selectCollections = createSelector(
    [selectShop],
    shop=>shop.shopItems
)

export const selectCollection = collectionUrlParam => {
    return createSelector(
        [selectCollections],
        collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    )
}