import React from 'react'

export default function SolutionCard(props) {
    const {src,title,text} = props;
  return (
    <div class="solutions-item">
                        <div class="solutions-item-icon">
                        <img src={src} alt="description"/>
                        </div>
                        <h3>{title}</h3>
                        <p>
                            {text}
                        </p>
                    </div>
  )
}
