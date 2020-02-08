import * as types from './../constants/actionTypes';
export const AddToCart = ( product, quantity ) => {
    return {
        type: types.AddToCart
        , product
        , quantity
    }
}
export const Delete = ( product ) => {
    return {
        type: types.Delete
        , product
    }
}
export const MS_IN_CART = ( message ) => {
    return {
        type: types.MS_IN_CART
        , message
    }
}
export const MS_DELETE = ( message ) => {
    return {
        type: types.MS_DELETE
        , message
    }
}
export const MS_UPDATE = ( product, quantity ) => {
    return {
        type: types.MS_UPDATE_QUANTITY
        , product
        , quantity
    }
}
