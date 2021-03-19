import React from 'react';

import imgAuthor from '../assets/author.jpg';
import '../assets/styles/Author.css';

export function Author() {
    return (
        <div className="container">
            <img src={imgAuthor}/>
            <div className="description">
                <h2>Caio Pratali</h2>
                <p>Desenvolvedor JS e CEO na <strong>Pratali</strong></p>
            </div>
        </div>
    )
}