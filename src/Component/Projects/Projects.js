import './Projects.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [filterId, setFilterId] = useState({});
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);

    const handleDetails = (id) => {
        const filterProjectId = projects.find(projectId => projectId?.id === id);
        setFilterId(filterProjectId);
    }

    return (
        <div>
            <div className="container">
                <div className='py-5'>
                    <p className="mb-1 fs-4" style={{ color: 'tomato' }}>My Projects</p>
                    <h1 className='Heading text-white'>RECENT WORKS</h1>
                </div>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {
                        projects.map(project => <div key={project?.name} class="col card-section">
                            <div class="card h-100">
                                <img style={{ width: '100%', height: '100%' }} src={project?.img} class="card-img-top" alt="..." />
                                <div class="card-footer text-muted">
                                    <h3>Project Name</h3>
                                </div>
                                <div className="overlay">
                                    <div style={{ width: '100%' }} className="text">
                                        <div className=" w-75 d-flex m-auto">
                                            <div data-bs-toggle="modal" data-bs-target="#exampleModal">

                                                <button onClick={() => handleDetails(project?.id)} className='btn btn-danger'>
                                                    <i class="fas pe-2 fa-list"></i>
                                                    Features
                                                </button>

                                            </div>
                                            <div>
                                                <button className='btn btn-danger ms-2'><i class="fas pe-2 fa-external-link-alt"></i>Preview</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title fw-bold" id="exampleModalLabel">{filterId?.name}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-start">
                            <ul>
                                {
                                    filterId?.features?.split('. ').map(feature => <li>{feature}</li>)
                                }
                            </ul>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;