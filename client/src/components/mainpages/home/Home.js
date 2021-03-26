import React from "react";
import home from '../../img/home.png'
import about  from '../../img/about.jpg'
import plate1 from '../../img/a73.png'
import plate2 from '../../img/a6000.png'
import plate3 from '../../img/a7c.png'
import app1 from '../../img/app1.png'
import app2 from '../../img/app2.png'
import movil  from '../../img/movil-app.png'
import ScrollReveal from 'scrollreveal'

export default function Home() {

    const sr = ScrollReveal({
      origin: 'top',
      duration: 1200,
      distance: '30px',
      //scale: 1.1,
      reset:true
    }); 
    sr.reveal(` .about__data, .about__img,
                .services__content, .menu__content,
                .app__data, .app__img,
                .contact__data, .contact__button`,{interval:100})
    return (
    <div>
        {/* Home Start */}
        <div id="mycarousel" className="carousel slide" data-ride="carousel">
            
            <ol className="carousel-indicators">
                <li data-target="#mycarousel" data-slide-to={0} className="active" />
                <li data-target="#mycarousel" data-slide-to={1} className=" " />
                <li data-target="#mycarousel" data-slide-to={2} className=" " />
            </ol>
            
            {/*slide*/}
            <div className="carousel-inner">
                {/*Slide 1 .active*/}
                <div className="carousel-item active">
                    <section className="home" id="home">
                        <div className="home__container bd-container bd-grid">
                            <div className="home__data">
                            <h1 className="home__title">Sony α1</h1>
                            <h2 className="home__subtitle">Try the best camera of <br /> the world.</h2>
                            <button type="button" className="btn button btn-outline-success">View Product</button>
                            </div>
                            <img src={home} alt="" className="home__img" />
                        </div>
                    </section>
                </div>
                {/*Slide 2*/}
                <div className="carousel-item">
                    <section className="home" id="home">
                        <div className="home__container bd-container bd-grid">
                            <div className="home__data">
                            <h1 className="home__title">Sony <span className="home__title__a">α1</span></h1>
                            <h2 className="home__subtitle">Try the best camera of <br /> the world.</h2>
                            <button type="button" className="btn button btn-outline-success">View Product</button>
                            </div>
                            <img src={home} alt="" className="home__img" />
                        </div>
                    </section>
                </div>
                {/*Slide 3*/}
                <div className="carousel-item">
                <section className="home" id="home">
                        <div className="home__container bd-container bd-grid">
                            <div className="home__data">
                            <h1 className="home__title">Sony α1</h1>
                            <h2 className="home__subtitle">Try the best camera of <br /> the world.</h2>
                            <button type="button" className="btn button btn-outline-success">View Product</button>
                            </div>
                            <img src={home} alt="" className="home__img" />
                        </div>
                    </section>
                </div>
            </div>
            {/*Control slide*/}
            <a className="carousel-control-prev" href="#mycarousel" role="button" data-slide="prev"> <i className='bx bx-chevron-left'/> </a>
            <a className="carousel-control-next" href="#mycarousel" role="button" data-slide="next"> <i className='bx bx-chevron-right'/> </a>
            {/*end control slide*/} 
        </div>
        {/* Home End */}
        {/* About Start */}
        <section className=" about section bd-container" id="about">
            <div className="about__container  bd-grid">
                <div  className="about__data">
                <span className="section-subtitle about__initial">About us</span>
                <h2 className="section-title about__initial">We made the best <br /> camera sensor</h2>
                <p className="about__description">Sony’s CMOS image sensors offers a wide range of products with innovative technologies that can offer solutions in many industries.</p>
                <button type="button" className="btn button btn-outline-success">More Info</button>
                </div>
                <img src={about} alt="" className="about__img" />
            </div>
        </section>
        {/* About End */}
        {/* Services Start */}
        <section className="services section bd-container" id="services">
            <span className="section-subtitle">Offering</span>
            <h2 className="section-title">Our amazing services</h2>
            <div className="services__container  bd-grid">
                <div className="services__content">
                <svg xmlns="http://www.w3.org/2000/svg" className="services__img" viewBox="0 0 64 64" width="512" height="512"><g id="Consult-Talk"><rect x="16" y="25" width="2" height="2"/><rect x="26" y="25" width="2" height="2"/><path d="M61.142,36.01l-3.907-.558a14,14,0,0,0-.657-1.6L58.942,30.7a1,1,0,0,0-.093-1.307l-4.243-4.243A.989.989,0,0,0,54,24.867V15.241A8,8,0,0,0,57,9a7.917,7.917,0,0,0-4.573-7.224A1,1,0,0,0,51,2.68v5.6l-2,.667-2-.667V2.68a1,1,0,0,0-1.427-.9A7.917,7.917,0,0,0,41,9a8,8,0,0,0,3,6.241V22H41a1,1,0,0,0-.99.858l-.647,4.529,1.98.283L41.867,24h4.266l.524,3.67a1,1,0,0,0,.71.818,11.939,11.939,0,0,1,2.4.987,1,1,0,0,0,1.081-.077l2.961-2.22,3.016,3.016L54.6,33.155a1,1,0,0,0-.077,1.081,11.939,11.939,0,0,1,.987,2.4,1,1,0,0,0,.818.71l3.67.524v4.266l-3.67.524a1,1,0,0,0-.818.71,11.939,11.939,0,0,1-.987,2.4,1,1,0,0,0,.077,1.081l2.22,2.961-3.016,3.016L50.845,50.6a1,1,0,0,0-1.081-.077,11.939,11.939,0,0,1-2.4.987,1,1,0,0,0-.71.818L46.133,56H42V51.771a11.1,11.1,0,0,0-.45-3.121,9.11,9.11,0,1,0-6.394-7.062c-.024-.01-.047-.022-.071-.031L27,38.323V36.786A11.089,11.089,0,0,0,30.479,34H33a3,3,0,0,0,3-3V28.816A3,3,0,0,0,38,26V23a3,3,0,0,0-2-2.816V19A14,14,0,0,0,8,19v1.184A3,3,0,0,0,6,23v3a3,3,0,0,0,3,3h2c.064,0,.126-.01.189-.014A11.023,11.023,0,0,0,17,36.786v1.537L8.915,41.557A10.949,10.949,0,0,0,2,51.771V61a1,1,0,0,0,1,1H41a1,1,0,0,0,1-1V58h5a1,1,0,0,0,.99-.858l.558-3.907a14,14,0,0,0,1.6-.657L53.3,54.942a1,1,0,0,0,1.307-.093l4.243-4.243a1,1,0,0,0,.093-1.307l-2.364-3.152a14,14,0,0,0,.657-1.6l3.907-.558A1,1,0,0,0,62,43V37A1,1,0,0,0,61.142,36.01Zm-11-8.588c-.047-.023-.1-.038-.147-.06V15H48v7.93l-.01-.072A1,1,0,0,0,47,22H46V14.74a1,1,0,0,0-.429-.821A6,6,0,0,1,45,4.522V9a1,1,0,0,0,.684.949l3,1a1,1,0,0,0,.632,0l3-1A1,1,0,0,0,53,9V4.522a6,6,0,0,1-.571,9.4A1,1,0,0,0,52,14.74V26.033ZM37,40a7.05,7.05,0,1,1,3.333,5.941,10.916,10.916,0,0,0-2.611-2.877A6.836,6.836,0,0,1,37,40Zm-4-8H31.786a10.9,10.9,0,0,0,1.025-3.014c.063,0,.125.014.189.014h1v2A1,1,0,0,1,33,32ZM31,21a3.015,3.015,0,0,1-2.4-1.2l-1.8-2.4a1,1,0,0,0-.674-.392,1.011,1.011,0,0,0-.751.211L22.019,19.9A5.018,5.018,0,0,1,18.9,21H13V20a9,9,0,0,1,18,0Zm5,5a1,1,0,0,1-1,1H33V22h2a1,1,0,0,1,1,1ZM22,7A12.013,12.013,0,0,1,34,19v1H33a11,11,0,0,0-22,0H10V19A12.013,12.013,0,0,1,22,7ZM9,27a1,1,0,0,1-1-1V23a1,1,0,0,1,1-1h2v5Zm4,0V23h5.9a7.024,7.024,0,0,0,4.372-1.534l2.551-2.041L27,21a5.025,5.025,0,0,0,4,2v4a8.947,8.947,0,0,1-1.522,5H22v2h5.644A8.991,8.991,0,0,1,13,27Zm9,11a10.966,10.966,0,0,0,3-.426V39a3,3,0,0,1-6,0V37.574A10.966,10.966,0,0,0,22,38ZM40,60H34V49H32V60H12V49H10V60H4V51.771a8.958,8.958,0,0,1,5.658-8.357l7.563-3.025a4.968,4.968,0,0,0,9.558,0l7.563,3.025A8.958,8.958,0,0,1,40,51.771Z"/><rect x="43" y="26" width="2" height="2"/><rect x="43" y="52" width="2" height="2"/><rect x="52.192" y="48.192" width="2" height="2" transform="translate(-19.205 52.021) rotate(-45)"/><rect x="56" y="39" width="2" height="2"/><rect x="52.192" y="29.808" width="2" height="2" transform="translate(-6.205 46.636) rotate(-45)"/></g></svg>
                <h3 className="services__title">Excellent services</h3>
                <p className="services__description">We offer our clients excellent quality services for many years, with the best and delicious food in the city.</p>
                </div>
                <div className="services__content">
                <svg xmlns="http://www.w3.org/2000/svg" className="services__img" viewBox="0 0 74 74" width="512" height="512"><g id="line_icons" data-name="line icons"><path d="M71,48.153H54.786a1,1,0,0,1,0-2H70V28.25H55.2a1,1,0,0,1,0-2H71a1,1,0,0,1,1,1v19.9A1,1,0,0,1,71,48.153Z"/><path d="M65.316,61.709H8.684A6.691,6.691,0,0,1,2,55.026v-34.8a6.691,6.691,0,0,1,6.684-6.683H22.56l2.054-6.329A4.253,4.253,0,0,1,28.65,4.291H45.365a4.212,4.212,0,0,1,4.022,2.927l2.053,6.327H65.316A6.691,6.691,0,0,1,72,20.228v34.8A6.691,6.691,0,0,1,65.316,61.709ZM8.684,15.545A4.689,4.689,0,0,0,4,20.228v34.8a4.689,4.689,0,0,0,4.684,4.683H65.316A4.689,4.689,0,0,0,70,55.026v-34.8a4.689,4.689,0,0,0-4.684-4.683h-14.6a1,1,0,0,1-.951-.691l-2.28-7.021a2.245,2.245,0,0,0-2.118-1.542H28.65a2.252,2.252,0,0,0-2.135,1.55l-2.278,7.013a1,1,0,0,1-.951.691Z"/><path d="M43,10.6H31.016a1,1,0,0,1,0-2H43a1,1,0,0,1,0,2Z"/><path d="M19,48.153H3a1,1,0,0,1-1-1V27.25a1,1,0,0,1,1-1H18.534a1,1,0,0,1,0,2H4v17.9H19a1,1,0,0,1,0,2Z"/><path d="M37,58.407A21.547,21.547,0,1,1,58.547,36.86,21.571,21.571,0,0,1,37,58.407Zm0-41.094A19.547,19.547,0,1,0,56.547,36.86,19.569,19.569,0,0,0,37,17.313Z"/><path d="M37,53.532A16.672,16.672,0,1,1,53.672,36.86,16.691,16.691,0,0,1,37,53.532Zm0-31.344A14.672,14.672,0,1,0,51.672,36.86,14.689,14.689,0,0,0,37,22.188Z"/><path d="M26.9,37.86a1,1,0,0,1-1-1A11.111,11.111,0,0,1,37,25.762a1,1,0,0,1,0,2,9.108,9.108,0,0,0-9.1,9.1A1,1,0,0,1,26.9,37.86Z"/><path d="M64.983,23.011H56.31a1,1,0,0,1-1-1V18.339a1,1,0,0,1,1-1h8.673a1,1,0,0,1,1,1v3.672A1,1,0,0,1,64.983,23.011Zm-7.673-2h6.673V19.339H57.31Z"/><path d="M17.078,15.545H9.513a1,1,0,0,1-1-1V11.613A3.014,3.014,0,0,1,11.524,8.6h3.542a3.014,3.014,0,0,1,3.012,3.011v2.932A1,1,0,0,1,17.078,15.545Zm-6.565-2h5.565V11.613A1.013,1.013,0,0,0,15.066,10.6H11.524a1.013,1.013,0,0,0-1.011,1.011Z"/></g></svg>
                <h3 className="services__title">Great camera</h3>
                <p className="services__description">We offer our clients excellent quality services for many years, with the best and delicious food in the city.</p>
                </div>
                <div className="services__content">
                <svg id="Capa_1"  className="services__img" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m385.381 102.82c4.143 0 7.5-3.357 7.5-7.5v-10.082c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v10.082c0 4.142 3.358 7.5 7.5 7.5z"/><path d="m466.98 169.418c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h10.081c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5z"/><path d="m293.701 169.418c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h10.082c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5z"/><path d="m418.275 408.987c-13.32 0-24.157 10.837-24.157 24.156s10.837 24.156 24.157 24.156c13.319 0 24.156-10.837 24.156-24.156s-10.837-24.156-24.156-24.156zm0 33.312c-5.05 0-9.157-4.107-9.157-9.156s4.107-9.156 9.157-9.156c5.049 0 9.156 4.107 9.156 9.156s-4.107 9.156-9.156 9.156z"/><path d="m144.424 433.143c0 13.319 10.837 24.156 24.157 24.156s24.156-10.837 24.156-24.156-10.836-24.156-24.156-24.156-24.157 10.836-24.157 24.156zm33.313 0c0 5.049-4.107 9.156-9.156 9.156s-9.157-4.107-9.157-9.156 4.108-9.156 9.157-9.156 9.156 4.107 9.156 9.156z"/><path d="m219.501 318.031c8.467-8.241 9.443-22.576-.175-31.936l-31.174-30.345c-11.246-10.942-29.299-10.7-40.244.544l-5.838 5.998c-2.889 2.969-2.825 7.717.143 10.605l30.05 29.25-30.05 29.249c-1.425 1.387-2.241 3.284-2.268 5.272-.027 1.989.738 3.907 2.125 5.333l5.838 5.998c10.981 11.281 28.995 11.495 40.244.543zm-60.844 19.507-.607-.623 30.197-29.393c1.45-1.411 2.269-3.35 2.269-5.374s-.818-3.963-2.269-5.374l-30.197-29.394.607-.623c5.178-5.319 13.715-5.434 19.033-.258l31.174 30.345c3.327 3.238 2.882 7.802.175 10.438l-31.349 30.513c-5.293 5.151-13.813 5.106-19.033-.257z"/><path d="m377.881 176.918c0 4.143 3.357 7.5 7.5 7.5h25.506c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-18.006v-46.706c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5z"/><path d="m128.121 112.82h129.141c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-129.141c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z"/><path d="m96.817 151.567h134.052c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-134.052c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z"/><path d="m173.508 171.121c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h66.705c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"/><path d="m110.275 171.121c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h33.292c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"/><path d="m7.5 289.406h27.43c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-27.43c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5z"/><path d="m27.5 355.47h-20c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h20c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"/><path d="m115.733 291.959h-26.748c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h26.748c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z"/><path d="m456.009 282.004c34.75-23.411 55.991-62.863 55.991-105.087 0-20.068-4.565-39.271-13.57-57.072-1.869-3.696-6.382-5.177-10.077-3.308-3.696 1.869-5.178 6.382-3.308 10.077 7.932 15.684 11.955 32.609 11.955 50.303 0 37.974-19.494 73.403-51.238 93.873l-43.665-47.781c-5.072-5.552-12.295-8.735-19.814-8.735h-102.106c-4.256-11.968-6.415-24.511-6.415-37.357 0-61.547 50.072-111.618 111.619-111.618 31.926 0 62.391 13.724 83.583 37.653 2.744 3.1 7.484 3.39 10.587.642 3.101-2.746 3.389-7.486.642-10.587-11.018-12.442-24.252-22.442-38.838-29.635v-25.401c0-9.23-7.509-16.739-16.739-16.739h-78.469c-9.23 0-16.739 7.509-16.739 16.739v25.394c-41.819 20.698-70.646 63.818-70.646 113.552 0 12.784 1.892 25.304 5.617 37.357h-191.251c-9.567 0-17.426 7.396-18.193 16.77h-27.435c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h27.359v72.492h-47.359c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h47.359v21.937c-4.109.038-7.43 3.378-7.43 7.496s3.32 7.458 7.43 7.496v53.052c0 7.874 6.406 14.279 14.279 14.279h20.179v5.221h-23.4c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h30.9c4.142 0 7.5-3.357 7.5-7.5v-12.721h6.843c2.38 29.604 27.215 52.97 57.421 52.97 9.968 0 19.808-2.601 28.455-7.521 3.6-2.049 4.857-6.628 2.809-10.228-2.048-3.601-6.626-4.856-10.228-2.81-6.39 3.637-13.665 5.559-21.036 5.559-23.503 0-42.625-19.121-42.625-42.625s19.122-42.625 42.625-42.625 42.625 19.121 42.625 42.625c0 6.408-1.389 12.571-4.129 18.318-1.783 3.739-.196 8.215 3.542 9.997 3.74 1.782 8.215.196 9.998-3.542 3.039-6.374 4.828-13.125 5.383-20.118h134.854c2.38 29.604 27.215 52.97 57.421 52.97s55.04-23.366 57.421-52.97h15.439c11.505 0 20.865-9.36 20.865-20.865v-63.27c0-6.701-2.489-13.116-7.01-18.062zm-111.601-244.033c0-.959.78-1.739 1.739-1.739h78.469c.959 0 1.739.78 1.739 1.739v19.166c-13.061-4.473-26.89-6.837-40.974-6.837-14.333 0-28.116 2.398-40.974 6.807v-19.136zm46.617 195.158 78.05 85.407h-55.947c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h69.655l11.135 12.185c4.54 4.968 2.632 10.359 3.082 16.08h-5.782c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h5.782v11.098h-43.101c-9.812-7.743-22.183-12.381-35.623-12.381s-25.811 4.638-35.623 12.381h-81.717v-158.624h32.347v89.167c0 8.323 6.771 15.095 15.094 15.095h34.767c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-34.767c-.052 0-.094-.043-.094-.095v-89.167h34.002c3.315 0 6.502 1.405 8.74 3.854zm-29.427 189.669h-60.664v-19.899h68.318c-3.712 5.994-6.346 12.717-7.654 19.899zm-143.995-19.899h68.331v19.899h-60.677c-1.308-7.182-3.942-13.905-7.654-19.899zm-147.744 0h49.698c-3.712 5.994-6.346 12.717-7.654 19.899h-42.044zm63.098-15h-63.098v-17.429h32.5c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-32.5v-21.934h32.5c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-32.5v-85.992c0-1.803 1.466-3.27 3.269-3.27h212.806v158.624h-81.73c-9.812-7.743-22.183-12.381-35.623-12.381s-25.811 4.639-35.624 12.382zm285.318 87.869c-23.504 0-42.625-19.121-42.625-42.625s19.121-42.625 42.625-42.625 42.625 19.121 42.625 42.625-19.121 42.625-42.625 42.625zm72.859-52.97h-16.183c-1.308-7.182-3.942-13.905-7.654-19.899h29.703v14.034c0 3.234-2.631 5.865-5.866 5.865z"/></g></svg>
                <h3 className="services__title">Delivery</h3>
                <p className="services__description">We offer our clients excellent quality services for many years, with the best and delicious food in the city.</p>
                </div>
            </div>
        </section>
        {/* Services End */}
        {/* Menu Start */}
        <section className="menu section bd-container" id="menu">
            <span className="section-subtitle">Special</span>
            <h2 className="section-title">Camera of the week</h2>
            <div className="menu__container bd-grid">
                <div className="menu__content">
                <img src={plate1} alt="" className="menu__img" />
                <h3 className="menu__name">Sony α7III</h3>
                <span className="menu__detail">Full-frame Camera</span>
                <span className="menu__preci">$2199.00</span>
                <button type="button" className="btn menu__button btn-outline-success"><i className='bx bx-cart'/></button>
                </div>
                <div className="menu__content">
                <img src={plate2} alt="" className="menu__img" />
                <h3 className="menu__name">Sony α6000</h3>
                <span className="menu__detail">Crop Camera</span>
                <span className="menu__preci">$499.00</span>
                <button type="button" className="btn menu__button btn-outline-success"><i className='bx bx-cart'/></button>
                </div>
                <div className="menu__content">
                <img src={plate3} alt="" className="menu__img" />
                <h3 className="menu__name">Sony α7c</h3>
                <span className="menu__detail">Full-frame Camera</span>
                <span className="menu__preci">$2149.00</span>
                <button type="button" className="btn menu__button btn-outline-success"><i className='bx bx-cart'/></button>
                </div>
            </div>
        </section>
        {/* Menu End */}
        {/* Apps Start */}
        <section className="app section bd-container">
            <div className="app__container bd-grid">
                <div className="app__data">
                    <span className="section-subtitle app__initial">App</span>
                    <h2 className="section-title app__initial">App is aviable</h2>
                    <p className="app__description">Find our application and download it, you can make reservations, food orders, see your deliveries on the way and much more.</p>
                    <div className="app__stores">
                        <img src={app1} alt="" className="app__store" />
                        <img src={app2} alt="" className="app__store" />
                    </div>
                </div>
                <img src={movil} alt="" className="app__img" />
            </div>
        </section>
        {/* Apps End */}
        {/* Contact Start */}
        <section className="contact section bd-container" id="contact">
            <div className="contact__container bd-grid">
                <div className="contact__data">
                <span className="section-subtitle contact__initial">Let's talk</span>
                <h2 className="section-title contact__initial">Contact us</h2>
                <p className="contact__description">If you want to reserve a table in our restaurant, contact us and we will attend you quickly, with our 24/7 chat service.</p>
                </div>
                <div className="contact__button">
                <button type="button" className="btn button btn-outline-success">Contact Us Now</button>
                </div>
            </div>
        </section>
        {/* Contact End */}
    </div>
    )
}
