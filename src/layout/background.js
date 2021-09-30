import React from 'react'
import './background.css'

export const Background = (props) => {
    return (
        <div className="back">
            {props.children}
        </div>
    )
}
export default Background
