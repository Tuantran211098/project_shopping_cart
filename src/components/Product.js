import React, { Component } from 'react';
import * as Message from './../constants/Message';
class Product extends Component {
    render( ) {
        var { product } = this.props;
        return (
            <div class="col-lg-4 col-md-6 mb-r">
                <div class="card text-center card-cascade narrower">
                    <div class="view overlay hm-white-slight z-depth-1">
                        <img src={product.image}
                            class="img-fluid" alt="" />
                        <a>
                            <div class="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">
                            <strong>
                                <a>{product.name}</a>
                            </strong>
                        </h4>
                        <ul class="rating">
                            <li>
                                {this.showRating(product.rating)}
                            </li>
                        </ul>
                        <p class="card-text">
                            {product.des}
                        </p>
                        <div class="card-footer">
                            <span class="left">{product.price}$</span>
                            <span onClick={()=>this.onAddToCart(product)} class="right">
                                <a class="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                    <i class="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    showRating = ( rating ) => {
        var result = [ ];
        if ( rating > 0 ) {
            for ( var i = 1; i <= rating; i++ ) {
                result.push( <i className="fa fa-star"></i> )
            }
            for ( var j = 0; j < ( 5 - rating ); j++ ) {
                result.push( <i className="fa fa-star-o"></i> )
            }
        }
        return result;
    }
    onAddToCart = ( product ) => {
        this.props.onAddToCart( product )
        this.props.onAddMessage( Message.MS_ADD_SUCCESS )
    }
}
export default Product;
