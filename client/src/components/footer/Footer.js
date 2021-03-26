import React from 'react'

export default function Footer() {
    return (
        <footer className="section bd-container">
            <div className="footer bd-grid">
                <div className="footer__content">
                <h3 className="footer__content__title">Follow us</h3>
                <span className="footer__content__subtitle">Page</span>
                <div>
                    <a href="# " className="footer__content__social"><i className="bx bxl-facebook" /></a>
                    <a href="# " className="footer__content__social"><i className="bx bxl-instagram" /></a>
                    <a href="# " className="footer__content__social"><i className="bx bxl-twitter" /></a>
                </div>
                </div>
                <div className="footer__content">
                <h3 className="footer__content__title">Services</h3>
                <ul>
                    <li><a href="# " className="footer__content__item">Delivery</a></li>
                    <li><a href="# " className="footer__content__item">Pricing</a></li>
                    <li><a href="# " className="footer__content__item">Support</a></li>
                    <li><a href="# " className="footer__content__item">Warranty</a></li>
                </ul>
                </div>
                <div className="footer__content">
                <h3 className="footer__content__title">Information</h3>
                <ul>
                    <li><a href="# " className="footer__content__item">Event</a></li>
                    <li><a href="# " className="footer__content__item">Contact us</a></li>
                    <li><a href="# " className="footer__content__item">Privacy policy</a></li>
                    <li><a href="# " className="footer__content__item">Terms of services</a></li>
                </ul>
                </div>
                <div className="footer__content">
                <h3 className="footer__content__title">Address</h3>
                <ul>
                    <li>Tokyo - Japan</li>
                    <li>Jr Union #999</li>
                    <li>999 - 888 - 777</li>
                    <li>sonycamera@email.com</li>
                </ul>
                </div>
            </div>
            <p className="footer__copy">© 2021 Sony. All right reserved</p>
        </footer>

    )
}
