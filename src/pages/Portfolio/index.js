import React from "react";

function Portfolio() {

    return (

        <section className="items" id="projects">
        <div className="section-titles">
            <h3>Projects</h3>
        </div>
        <div className="project-sites">
            <div className="image-1">
                <a href="https://ahuber25.github.io/run-buddy/" target="_blank" rel="noopener noreferrer"><img src="../images/run-buddy.jpg" alt="run buddy title"/>
                <p>Run Buddy</p></a>
            </div>
            <div className="image-2">
                <a href="https://ahuber25.github.io/" target="_blank" rel="noopener noreferrer"><img src="../images/horiseon.jpg" alt="horiseon project"/>
                <p>Horiseon</p></a>
            </div>
            <div className="image-2">
                <a href="https://cmarvann.github.io/Group2-Project1/index.html" target="_blank" rel="noopener noreferrer"><img src="../images/ampersand.png" alt="first dnd creator"/>
                <p>First D&D Creator</p></a>
            </div>
            <div className="image-2">
                <a href="https://dry-sands-22029.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="../images/4e_black_dragon.webp" alt="second D&D creator"/>
                <p>Second D&D Creator</p></a>
            </div>
            <div className="image-2">
                <a href="https://travel-mategr1.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="../images/sydney.jpg" alt="travel mate"/>
                <p>Travel Mate</p></a>
            </div>
        </div>
    </section>
    

    )

}

export default Portfolio;