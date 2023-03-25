import { reducer } from './reducers/index'

const initialState = {
    // foco principal é o number
    number: 0,
    //----*
    cart: [],
    user: null,
    products: []
}

export {
    reducer,
    initialState
}