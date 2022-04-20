import ProductActionTypes from './products.types'
import { useQuery } from "@apollo/client"
import NAMES_QUERY from '../../graphQLdata/GraphQL';

export const fetchProductsStart = () => ({
    type: ProductActionTypes.FETCH_COLLECTIONS_START
});

export const fetchProductsSuccess = productsMap => ({
    type: ProductActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: productsMap
})

export const fetchProductsFailure = errorMessage => ({
    type: ProductActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchProductsAsync = () => {
    console.log('started');
    const { loading, error, data } = useQuery(NAMES_QUERY);
    console.log(data)
    console.log(error)
    // return dispatch => {

    // }
}