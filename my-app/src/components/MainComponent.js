import React, { Component } from 'react';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent';
import Products from './ProductComponent';

class Main extends Component {


    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (
            <div>
                <Header />
                <Products />
                <Footer />
            </div>
        );
    }
}

export default Main;