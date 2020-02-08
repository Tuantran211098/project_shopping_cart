import React, { Component } from 'react';
import Header from './components/Header';
import ProductContainer from './container/ProductContainer';
import MessageContainer from './container/MessageContainer';
import CartContainer from './container/CartContainer';
import Footer from './components/Footer';
class App extends Component {
    render( ) {
        return (
            <div>
			<Header/>
			<main id="mainContainer">
				<div class="container">
					<ProductContainer/>
				
					<MessageContainer/>
					
					<CartContainer/>
				</div>
			</main>
			<Footer/>
			
		</div>
        );
    }
}

export default App;
