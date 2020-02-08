import React, { Component } from 'react';
import Product from './../components/Product';
import Products from './../components/Products';
import { connect } from 'react-redux';
import { AddToCart, MS_IN_CART } from './../actions/index';
import PropTypes from 'prop-types';
class ProductContainer extends Component {
    render( ) {
        var { product } = this.props;
        return (
            <section class="section">
                <div class="row">
                    <Products>
                        {this.showProduct(product)}
                    </Products>
                </div>
            </section>
        )
    }
    showProduct = ( product ) => {
        var result = null;
        var { onAddToCart, onAddMessage } = this.props;
        if ( product.length > 0 ) {
            result = product.map( ( product, index ) => {
                return <Product key={index} product={product} onAddToCart={onAddToCart} onAddMessage={onAddMessage}/>
            } )
        }
        return result;
    }
}
const mapStateToProps = ( state ) => {
    return {
        product: state.Product
    }
}
const mapDispatchToProps = ( dispatch, props ) => {
    return {
        onAddToCart: ( product ) => {
            dispatch( AddToCart( product, 1 ) )
        }
        , onAddMessage: ( message ) => {
            dispatch( MS_IN_CART( message ) )
        }
    }
}
ProductContainer.propTypes = {
    product: PropTypes.arrayOf(
        PropTypes.shape( {
            id: PropTypes.number.isRequired
            , name: PropTypes.string.isRequired
        } )
    ).isRequired
}
export default connect( mapStateToProps, mapDispatchToProps )( ProductContainer );
