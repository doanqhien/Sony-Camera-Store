import React from 'react'
import { Tween, Timeline } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import ScrollMagic from "scrollmagic";

export default function ProductDetail() {

    /* const intro = document.querySelector(".intro");
    const video = intro.querySelector("video");
    const text = intro.querySelector("h1");
    //END SECTION
    const section = document.querySelector("section");
    const end = section.querySelector("h1");

    //SCROLLMAGIC
    const controller = new ScrollMagic.Controller(); */

    //Scenes
    /* let scene = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: 2700,
    triggerHook: 0
    })
    .addIndicators()
    .setPin(intro)
    .addTo(controller);  */

    //Text Animation
    /* const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

    let scene2 = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: intro,
    triggerHook: 0
    })
    .setTween(textAnim)
    .addTo(controller); */

    //Video Animation
    /* let accelamount = 0.1;
    let scrollpos = 0;
    let delay = 0;

    scene.on("update", e => {
    scrollpos = e.scrollPos/1000;
    });

    setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    video.currentTime = scrollpos;
    },16.67);  */

    return (  
        
            <div className="App1">
              <div className="topSpacing">
                Scroll Down to see the scrollMagic and Tween
              </div>
              <Controller>
                <Scene duration={500} offset={50} triggerElement=".trigger">
                  <Tween
                    staggerFrom={{ y: 50, visibility: "hidden", opacity: 0 }}
                    staggerTo={{ y: 0, visibility: "visible", opacity: 1 }}
                    stagger={1}
                  >
                    <div className="trigger" />
                    <div className="div1" />
                    <div className="div2" />
                    <div className="div3" />
                  </Tween>
                </Scene>
              </Controller>
              <div className="bottomSpacing" />
            </div>
            /* <div className="intro">
                <h1 />
                <video src="../../video/Untitled 1.mp4" />
            </div>
            <div className="product__video">
                <video muted autoPlay src="../../video/Untitled 1.mp4" />
                <h1>REVOLUTIONARY</h1>
             */
        
    )
}
