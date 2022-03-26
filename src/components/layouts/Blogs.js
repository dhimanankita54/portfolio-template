import React from 'react'

const Blog = ({ id, name, url}) => {

    return (
        <div data-aos="fade-up" className=" col-12 col-lg-4 blog-card">
            <div className="image-project">
                <div className={`img-pro ${id}`}></div>
            </div>
            <a title={url} className="project-name" rel="noopener noreferrer" target="_blank" href={url}><h2>{name}</h2></a>  
        </div>
    )
}

export default Blog