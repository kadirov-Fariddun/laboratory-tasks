import React from 'react'
import work from '../images/work-1.png'

export default function WorkCard(props) {
    const {number,title,text} = props;
  return (
    <div class="how-work-step-item">
                        <div class="how-work-image">
                            <img src={work} alt="description"/>
                            <span>{number}</span>
                        </div>
                        <div class="how-work-title">
                            {title}
                        </div>
                        <p class="how-work-text">
                           {text}
                        </p>                  
    </div>
  )
}
