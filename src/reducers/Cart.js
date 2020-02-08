import * as types from './../constants/actionTypes';
var data = JSON.parse( localStorage.getItem( 'Cart' ) );
var initialState = data ? data : [ ];
var Cart = ( state = initialState, action ) => {
    var index = -1;
    var { product, quantity } = action
    switch ( action.type ) {
    case types.AddToCart:
        index = findIndex( state, product );
        if ( index !== -1 ) {
            state[ index ].quantity += quantity
        } else {
            state.push( {
                product
                , quantity
            } )
        }
        localStorage.setItem( 'Cart', JSON.stringify( state ) );
        return [ ...state ]
    case types.Delete:
        index = findIndex( state, product );
        if ( index !== -1 ) {
            state.splice( index, 1 );
        }
        localStorage.setItem( 'Cart', JSON.stringify( state ) );
        return [ ...state ]
    case types.MS_UPDATE_QUANTITY:
        console.log( product, quantity )
        index = findIndex( state, product );
        if ( index !== -1 ) {
            state[ index ].quantity = quantity
        }
        localStorage.setItem( 'Cart', JSON.stringify( state ) );
        return [ ...state ]
    default:
        return [ ...state ]
    }
}
var findIndex = ( state, product ) => {
    var index = -1;
    for ( var i = 0; i < state.length; i++ ) {
        if ( state[ i ].product.id === product.id ) {
            index = i;

        }
    }
    return index;
}
export default Cart;
