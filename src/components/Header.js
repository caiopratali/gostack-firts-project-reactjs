import React from 'react';

import '../assets/styles/Header.css';

export function Header({title, btnClick, children}) {
    return (
        <header>
            {/* <h1>{title}</h1> */}
            <ul>
                {children.map(project => <li key={project.id} >{project.title}</li>)}
            </ul>

            <button type="button" onClick={btnClick}>Add Project</button>
        </header>
    );
}