import React, { useEffect, useState } from 'react'
import { Animated } from "react-animated-css";
import {StyleSheet, css} from "aphrodite";
import './landing.css';
import Mypic from '../../images/Mypic.jpg';

const Landing = () => {
    const [textLoad, setTextLoad] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setTextLoad(true)
        }, 2000)
    })

    return (
        <div className="container">
            <Animated animationIn="zoomInUp" animationOut="fadeOut" isVisible={true} animationInDuration={1200}>
                <div className="body">
                    <section>
                        <div className="bannerText">
                            <h2>Towfiqur Rahman</h2>
                            <Animated animationIn="lightSpeedIn" animationInDelay={2700}>
                                <h1>
                                    FullStack Developer.
                            </h1>
                            </Animated>
                            
                            <h3 data-text="Be yourself, everyone else is already taken.">
                                Be yourself, everyone else is already taken.
                        </h3>
                            <Animated animationIn="fadeIn" animationInDelay={2600}>
                                <h4 data-text="Oscar Wilde">~ Oscar Wilde</h4>
                            </Animated>

                        </div>
                    </section>

                </div>
            </Animated>

            <div className="imageDiv">
                <Animated animationIn="rollIn" animationInDelay={2500}>
                    <img src={Mypic} className="mypic" />
                </Animated>
            </div>

        </div>

    )
}

export default Landing
