import * as types from './../constants/actionTypes';
import * as Messages from './../constants/Message';
var initialState = Messages.MS_WELCOME;
var Message = ( state = initialState, action ) => {
    var { message } = action;
    switch ( action.type ) {
    case types.MS_IN_CART:
        return message
    case types.MS_DELETE:
        return message
    default:
        return [ ...state ]
    }
}
export default Message;
