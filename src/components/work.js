import React from 'react';
import "./WorkCard.scss";
import WorkCard from './workcard/WorkCard';
import workCardData from "./workCardData"

const work = () => {
  return (
    <div className='work-container'>
      <div className='project-heading'>
        <div className='project-container'>
          {workCardData.map((val, ind) =>{
            return(
              <WorkCard 
                key={ind} 
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}  
              />

            )

          })}
            

        </div>
      </div>
    </div>
  )
}

export default work;