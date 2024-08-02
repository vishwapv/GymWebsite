import React from 'react'
import { programsData } from '../../data/programsData';

const Pratice = () => {
    const headings = programsData.map(program => program.details);
    console.log("all data",headings)
  return (
    <div>
      {headings.map((heading, index) => (
        <h1 key={index}>{heading}</h1>
      ))}
    </div>
  )
}

export default Pratice
