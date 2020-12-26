import React from 'react';
import './WebTemplate.css';

const WebTemplate = ({color, form, children}) => {
    return (
        <main className="web-main">
            <div className="title">to-do-list</div>
            <section className="text-color">{color}</section>
            <section className="form-wrapper">{form}</section>
            <section className="todos-wrapper">{children}</section>
        </main>    
    );
}

export default WebTemplate;
