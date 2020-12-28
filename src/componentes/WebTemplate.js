import React from 'react';
import './WebTemplate.css';

const WebTemplate = ({form, palette, children}) => {
    return (
        <main className="web-main">
            <div className="title">To-Do-List</div>
            <section className="palette-wrapper">{palette}</section>
            <section className="form-wrapper">{form}</section>
            <section className="todos-wrapper">{children}</section>
        </main>    
    );
}

export default WebTemplate;
