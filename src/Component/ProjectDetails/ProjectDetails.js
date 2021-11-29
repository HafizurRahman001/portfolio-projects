import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProjectDetails = () => {
    const { id } = useParams();
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);
    const filterId = projects.filter(projs => projs.id === id);
    console.log(filterId);
    return (
        <div>
            <h2 style={{ color: 'yellow' }}>{id}</h2>
        </div>
    );
};

export default ProjectDetails;