import React, { Component } from "react";
import './WebItemColor.css';


const Color = ({color, active, onClick}) => {
    return (
        <div className={`color ${active && 'active'}`} style={{ background: color}} onClick={onClick}>
    
        </div>
    )
} 

const WebItemColor = ({colors, selected, onSelect}) => {
    const colorList = colors.map(
        (color) => (<Color color={color} active={selected==color} onClick={() => onSelect(color)}/>)
    );
    return (
        <div className="palette">
            {colorList}
        </div>
    )
}

export default WebItemColor;



