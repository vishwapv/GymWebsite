import React from 'react';
import './Program.css';
import { programsData } from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png'

const Program = () => {
   
const programData = programsData.map(program => program)
console.log("all data",programData)

  return (
    <div className="Programs" id="program">
        <div className="program-header">
            <span className='stroke-text'>Explore our</span>
            <span>Program</span>
            <span className='stroke-text'>to shape you</span>
        </div>

        <div className="program-categories">
            {programData.map((programs,) =>(
                <div className="categories">
                    {programs.image}
                    <span>{programs.heading}</span>
                    <span >{programs.details}</span>
                    <div className="join-now"><span>Join Now</span><img src={RightArrow} alt="" /></div>
                </div>
            ))}
        </div>
       

    </div>
  )
}

export default Program
