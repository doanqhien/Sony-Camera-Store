import React from 'react'
import BtnRender from './BtnRender'
import plate1 from '../../img/a73.png'
import plate2 from '../../img/a6000.png'
import plate3 from '../../img/a7c.png'

export default function ProductItem({product, isAdmin, deleteProduct, handleCheck}) {

    return (
        <div className="product_card">
        <section className="menu section bd-container">
            <span className="section-subtitle">Special</span>
            <h2 className="section-title">Camera of the week</h2>
            <div className="menu__container bd-grid">
                <div className="menu__content">
                <img src={plate1} alt="" className="menu__img" />
                <h3 className="menu__name">Sony α7III</h3>
                <span className="menu__detail">Full-frame Camera</span>
                <span className="menu__preci">$2199.00</span>
                <button type="button" className="btn menu__button btn-outline-success"><i className="bx bx-cart-alt" /></button>
                </div>
                <div className="menu__content">
                <img src={plate2} alt="" className="menu__img" />
                <h3 className="menu__name">Sony α6000</h3>
                <span className="menu__detail">Crop Camera</span>
                <span className="menu__preci">$499.00</span>
                <button type="button" className="btn menu__button btn-outline-success"><i className="bx bx-cart-alt" /></button>
                </div>
                <div className="menu__content">
                <img src={plate3} alt="" className="menu__img" />
                <h3 className="menu__name">Sony α7c</h3>
                <span className="menu__detail">Full-frame Camera</span>
                <span className="menu__preci">$2149.00</span>
                <button type="button" className="btn menu__button btn-outline-success"><i className="bx bx-cart-alt" /></button>
                </div>
            </div>
        </section>
        </div>
        /* <div className="product_card">
            {
                isAdmin && <input type="checkbox" checked={product.checked}
                onChange={() => handleCheck(product._id)} />
            }
            <img src={product.images.url} alt="" />

            <div className="product_box">
                <h2 title={product.title}>{product.title}</h2>
                <span>${product.price}</span>
                <p>{product.description}</p>
            </div>

            
            <BtnRender product={product} deleteProduct={deleteProduct} />
        </div> */
    )
}


