import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import productReducer from './products/products.reducer'

// Data that you want to be persisted
const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
}

// To combine all created reducers
const rootReducer = combineReducers({
    products: productReducer,
})

export default persistReducer(persistConfig, rootReducer);