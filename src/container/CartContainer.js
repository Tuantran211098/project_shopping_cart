import React, { Component } from 'react';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import { Delete, MS_DELETE, MS_UPDATE } from './../actions/index';
import { connect } from 'react-redux';
import * as Message from './../constants/Message';
import PropTypes from 'prop-types';
class CartContainer extends Component {
    render( ) {
        var { cart } = this.props;
        return (
            <section class="section">
                <Cart>
                   {this.showCart(cart)}
                   {this.showResult(cart)}
                </Cart>
            </section>
        )
    }
    showCart = ( cart ) => {
        var result = Message.MS_EMPTY;
        var { Delete, DeleteMessage, onUpdate } = this.props
        if ( cart.length > 0 ) {
            result = cart.map( ( cart, index ) => {
                return <CartItem key={index} cart={cart} Delete={Delete} DeleteMessage={DeleteMessage} onUpdate={onUpdate}/>
            } )
        }
        return result;
    }
    showResult = ( cart ) => {
        var result = null;
        if ( cart.length > 0 ) {
            result = <CartResult cart={cart}/>
        }
        return result;
    }
}
const mapStateToProps = ( state ) => {
    return {
        cart: state.Cart
    }
}
CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape( {
            product: PropTypes.shape( {
                id: PropTypes.number.isRequired
                , name: PropTypes.string.isRequired
            } )
            , quantity: PropTypes.number.isRequired
        } )
    ).isRequired
}
const mapDispatchToProps = ( dispatch, props ) => {
    return {
        Delete: ( product ) => {
            dispatch( Delete( product ) )
        }
        , DeleteMessage: ( message ) => {
            dispatch( MS_DELETE( message ) )
        }
        , onUpdate: ( product, quantity ) => {
            dispatch( MS_UPDATE( product, quantity ) )
        }
    }
}
export default connect( mapStateToProps, mapDispatchToProps )( CartContainer );
