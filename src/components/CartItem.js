import React, { Component } from 'react';
import * as Message from './../constants/Message';
class CartItem extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            quantity: 1
        }
    }
    render( ) {
        var { cart } = this.props;

        return (
            <tr>
                <th scope="row">
                    <img src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72"
                        alt="" class="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{cart.product.name}</strong>
                    </h5>
                </td>
                <td>{cart.product.price}$</td>
                <td class="center-on-small-only">
                    <span class="qty">{cart.quantity} </span>
                    <div class="btn-group radio-group" data-toggle="buttons">
                        <label onClick={()=>this.onUpdateQuantity(cart.product,cart.quantity -1 )} class="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light">
                            <a>—</a>
                        </label>
                        <label  onClick={()=>this.onUpdateQuantity(cart.product,cart.quantity +1 )} class="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light">
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{ this.showTotal(cart.product.price,cart.quantity)}$</td>
                <td>
                    <button onClick={()=>this.Delete(cart.product)} type="button" class="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item">
                        X
                    </button>
                </td>
            </tr>
        )
    }
    showTotal = ( price, quantity ) => {
        return price * quantity
    }
    Delete = ( product ) => {
        this.props.Delete( product );
        this.props.DeleteMessage( Message.MS_DELETE );
    }
    onUpdateQuantity = ( product, quantity ) => {
        if ( quantity > 0 ) {
            this.setState( {
                quantity: quantity
            } )
            this.props.onUpdate( product, quantity );
        } else {
            this.setState( {
                quantity: 1
            } )
        }
    }
}
export default CartItem;
