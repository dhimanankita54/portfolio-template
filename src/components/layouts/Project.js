import React from 'react';
import ItemsCarousel from "react-items-carousel";
import { useState  } from 'react';

const Project = ({ id, name, url, des, skills, view, git }) => {

    const [active, setaAtive] = useState(0);
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 120;

    const handleview = () => {
        window.open("")
    }

    return (
            <div data-aos="fade-up" className=" col-12 col-lg-4 project-card">
                <div className="image-project">
                    <div className={`img-pro ${id}`}></div>
                </div>
                <a title={url} className="project-name" rel="noopener noreferrer" target="_blank" href={url}><h2>{name}</h2></a>
                <h3>{des}</h3>
                <h3 style={{ fontSize: "20px", textDecoration: "underline" }}>Tech Stack:</h3>{skills && <h3>{skills.map(skill => skill)}</h3>}
                <a href={view} target="_blank"><button className="view_btn">See Live</button></a>
                <a href={git} target="_blank"><button className="view_btn">Github</button></a>
            </div>
    )
}

export default Project
