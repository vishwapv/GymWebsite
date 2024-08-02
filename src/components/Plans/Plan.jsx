import React from 'react'
import './Plan.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plan = () => {
    // const plan = plansData
    // console.log("plans",plan)
  return (
    <div className="plans-container" id='plans'>
        <div className="blur blur-p-1"></div>
        <div className="blur blur-p-2"></div>
        <div className="program-header" style={{gap:'2 rem'}}>
            <span  className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITHUS</span>
        </div>

        {/* plans card   */}
        <div className="plans">
            {plansData.map((plans , i) =>(
                <div className="plan" key={i}>
                    {plans.icon}
                    <span>{plans.name}</span>
                    <span>${plans.price}</span>

                    <div className="features">
                        {plans.features.map((feature) =>(
                            <div className="feature">
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>

                    <div>
                        
                        <span>See more benefits -> </span>
                    </div>
                    <button className='btn'>Join now</button>
                </div>

            ))}

        </div>
    </div>
  )
}

export default Plan
