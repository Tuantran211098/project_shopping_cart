import React, { Component } from 'react';

class cartResult extends Component {
    render( ) {
        var { cart } = this.props;
        return (
            <tr>
                <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                <strong>{this.showSub(cart)}$</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button type="button" class="btn btn-primary waves-effect waves-light">Complete purchase
                        <i class="fa fa-angle-right right"></i>
                    </button>
                </td>
            </tr>
        )
    }
    showSub = ( cart ) => {
        var total = 0;
        if ( cart.length > 0 ) {
            for ( var i = 0; i < cart.length; i++ ) {
                total += cart[ i ].product.price * cart[ i ].quantity
            }
        }
        return total;
    }
}
export default cartResult;
