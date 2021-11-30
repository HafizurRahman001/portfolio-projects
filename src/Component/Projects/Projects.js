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
                <div style={{ paddingTop: '80px' }} className='pb-5' data-aos="fade-up">
                    <p className="mb-1 fs-4" style={{ color: 'tomato' }}>My Projects</p>
                    <h1 className='Heading text-white'>RECENT WORKS</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4 pb-5">
                    {
                        projects.map(project => <div key={project?.id} className="col card-section" data-aos="zoom-in">
                            <div className="card h-100">
                                <img style={{ width: '100%', height: '100%' }} src={project?.img} className="card-img-top" alt="..." />
                                <div style={{ backgroundColor: '#1B1464' }} className="card-footer text-white">
                                    <h3>{project?.name}</h3>
                                </div>
                                <div className="overlay">
                                    <div style={{ width: '100%' }} className="text">

                                        <div className=" w-75 d-flex m-auto">
                                            <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                <button onClick={() => handleDetails(project?.id)} className='btn' style={{ backgroundColor: 'yellow', color: 'black' }}>
                                                    <i className="fas pe-2 fa-list"></i>
                                                    Features
                                                </button>
                                            </div>
                                            <div>
                                                <a href={`${project?.preview}`} target="_blank">
                                                    <button style={{ backgroundColor: 'yellow', color: 'black' }} className='btn ms-2'><i className="fas pe-2 fa-external-link-alt"></i>Preview</button>
                                                </a>
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
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title fw-bold" id="exampleModalLabel">{filterId?.name}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-start">
                            <ul>
                                {
                                    filterId?.features?.split('. ').map(feature => <li>{feature}</li>)
                                }
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;