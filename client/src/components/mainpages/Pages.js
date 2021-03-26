import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './home/Home'
import Product from './product/Product'
import {GlobalState} from '../../GlobalState'
import NotFound from '../utils/not_found//NotFound'
import Login from './user/Login'
import Info from './info/Info'
import Support from './support/Support'
import Forgot from './user/Forgot'
import Register from './user/Register'
import ProductDetail from './product/ProductDetail'

export default function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin

    return (
        <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/detail/:id" exact component={DetailProduct} />
            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/register" exact component={isLogged ? NotFound : Register} />
            <Route path="/category" exact component={isAdmin ? Categories : NotFound} />
            <Route path="/create_product" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/history" exact component={isLogged ? OrderHistory : NotFound} />
            <Route path="/history/:id" exact component={isLogged ? OrderDetails : NotFound} />
            <Route path="/cart" exact component={Cart} />*/}
            <Route path="/support" exact component={Support}/>
            <Route path="/info" exact component={Info}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/forgot" exact component={Forgot}/>
            <Route path="/products" exact component={Product}/>
            <Route path="/productdetail" exact component={ProductDetail}/>
            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}
