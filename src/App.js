import React, { useState, useEffect } from 'react';
import api from './services/api';

import { Header } from './components/Header';
import { Author } from './components/Author';

import './assets/styles/App.css';

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        })
    }, []);

    async function handleAddProject() {
        // setProjects([...projects, `New project ${Date.now()}`]);

        const response = await api.post('projects', {
            title: `New project ${Date.now()}`,
            owner: 'Caio Pratali'
        });

        const project = response.data;

        setProjects([...projects, project]);

    }

    return (
        <>
            <h1>ProjectX</h1>
            <Header title="Home" btnClick={handleAddProject}>{projects}</Header>
            <Author className="author" />
        </>
    )
}

export default App;