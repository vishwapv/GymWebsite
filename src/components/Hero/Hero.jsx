import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png';
import NumberCounter from 'number-counter';


const Hero = () => {
    return (
        <div className="hero" id='home'>
            <div className="blur blur-h">  </div>
            <div className="left-h">
                <Header />
                {/* the best add    */}
                <div className="the-best-ad">
                    <div></div>
                    <span>The Best fitness club in the town</span>
                </div>

                {/* Hero Heading*/}

                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>shape </span>
                        <span>your</span>
                    </div>
                    <div>
                        <span>
                            Ideal body
                        </span>
                    </div>
                    <div>
                        <span>
                        Unlock your potential! 
💥 Fitness, strength, and fun all in one place.
join  us for a fitter, happier you!
                        </span>
                    </div>
                </div>

                {/* figures   */}
                <div className="figure">
                    <div>
                        <span><NumberCounter end={140} start={100} delay='4' preFix='+'/></span>
                        <span>exports coaches</span>
                    </div>
                    <div>
                        <span><NumberCounter end={350} start={100} delay='4' preFix='+'/></span>
                        <span>members joins</span>
                    </div>
                    <div>
                        <span><NumberCounter end={50} start={0} delay='4' preFix='+'/></span>
                        <span>fitness programs</span>
                    </div>
                </div>

                {/* hero button   */}
                <div className="hero-button">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>




            <div className="right-h">
                <button className="btn">Join Now</button>
                <div className="heart-rate">
                    <img src={heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bmp</span>
                </div>

                {/* hero image   */}
                <img src={hero_image} alt="" className='hero_image' />
                <img src={hero_image_back} alt="" className='hero_image_back' />

                {/* calories  */}
                <div className="calories">
                    <img src={calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 Kcal</span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Hero
