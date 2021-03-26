import React, {useContext, useState} from 'react'
import {GlobalState} from '../../../GlobalState'
import ProductItem from './ProductItem'
import Loading from '../../utils/loading/Loading'


export default function Product() {

    const state = useContext(GlobalState)
    const [products, setProducts] = state.productsAPI.products
    const [loading, setLoading] = useState(false)

    if(loading) return <div><Loading /></div>
    return (
        
        <div className="products">
    
            
            {
                products.map(product => {
                    return <ProductItem key={product._id} product={product}
                     />
                })
            } 
        </div>
    )
}
