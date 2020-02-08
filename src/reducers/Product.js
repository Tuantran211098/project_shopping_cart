import * as types from './../constants/actionTypes';
var initialState = [
    {
        id: 1
        , des: 'Iphone do apple san xuat'
        , image: 'https://znews-photo.zadn.vn/w1024/Uploaded/neg_wpeczyr/2019_09_19/iPhone_11_Pro_zing_1.JPG'
        , price: 1500
        , name: 'Iphone 7'
        , inventory: 4
        , rating: 4
    }





    
    , {
        id: 2
        , des: 'Iphone do apple san xuat'
        , image: 'https://znews-photo.zadn.vn/w1024/Uploaded/neg_wpeczyr/2019_09_19/iPhone_11_Pro_zing_1.JPG'
        , price: 1000
        , name: 'Iphone 8'
        , inventory: 5
        , rating: 3
    }





    
    , {
        id: 3
        , des: 'Iphone do apple san xuat'
        , image: 'https://znews-photo.zadn.vn/w1024/Uploaded/neg_wpeczyr/2019_09_19/iPhone_11_Pro_zing_1.JPG'
        , price: 1200
        , name: 'Iphone 10'
        , inventory: 4
        , rating: 2
    }
];
var Product = ( state = initialState, action ) => {
    switch ( action.type ) {
        default: return [ ...state ]
    }
}
export default Product;
