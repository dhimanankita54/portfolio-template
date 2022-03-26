import React from 'react'
import Skills from '../layouts/Skills'
import { about, skillsBar, section2title, sectionskill } from '../../profile';


const About = () => {
    return (
        <>
        <div id="about" className="effect2">
            <div data-aos="zoom-in-up" data-aos-once="true" className="row">
                <div className="col-12 d-none d-md-block offset-md-1 col-md-4 Photo" id="not-dark2">
                </div>
                <div className="col-12 offset-md-1 col-md-6 about">
                    <div className="About-title-box">
                        <h1 id="About" className="red-line pp-head">{section2title}</h1>
                    </div>
                    <p className="lead about-text">
                        {about.paragraph}
                    </p>
                </div>
            </div>
            </div>

            <div id="about" className="effect2">
            <div id="Skills">
            <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{sectionskill}</h1>
                    </div>
                <div className="row d-flex justify-content-center skills">
                    {skillsBar.map((x) =>
                        <Skills key={x.name} faClass={x.faClass} svg={x.svg} label={x.name} img={x.img}/>
                    )}̀
                </div>
            </div>
        </div>
        </>
    )
}

export default About
