import React from 'react'
import {Header} from '../components/Header/Header';
import {Route, Switch, Redirect} from 'react-router-dom'
import Footer from '../components/Footer/Footer';
import HomePage from '../components/HomePage/HomePage';
import ProductPage from '../components/ProductPage/ProductPage'
import ProductDetails from '../components/ProductPage/ProductDetails/ProductDetails'
import Cart from "../components/Cart/Cart"
// import Product from '../components/Products/Product/Product';
interface Props {
    
}

export const csp = (props: Props) => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/products" exact component={ProductPage} />
                <Route path="/products/details" exact component={ProductDetails} />
                <Route path="/cart" exact component={Cart} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </div>
    )
}
