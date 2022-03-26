import React from 'react'
import Project from '../layouts/Project'
import Blog from '../layouts/Blogs'
import { projects, miscellaneous, section3Title, section4Title } from '../../profile'

const Works = () => {
    return (
        <>
            <div data-aos="zoom-in-up" data-aos-once="true" className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{section3Title}</h1>
                    </div>
                </>
                <div className="row">
                {projects && projects.map((x) => 
                <Project key={x.id} id={x.id} url={x.url} name={x.name} des={x.des} skills={x.skills} view={x.view} git={x.git}/>
                )}
                </div>
            </div>

            <div className="third">
                <>
                    <div className="pp-head-line mx-auto text-center">
                        <h1 id="Projects" className="red-line pp-head">{section4Title}</h1>
                    </div>
                </>
                <div className="row">
                    {miscellaneous && miscellaneous.map((x) => 
                    <Blog key={x.id} id={x.id} url={x.url} name={x.name} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Works
