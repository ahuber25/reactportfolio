import React from "react";

function Portfolio() {

    return (

        <section class="items" id="projects">
        <div class="section-titles">
            <h3>Projects</h3>
        </div>
        <div class="project-sites">
            <div class="image-1">
                <a href="https://ahuber25.github.io/run-buddy/" target="_blank" rel="noopener noreferrer"><img src="../images/run-buddy.jpg" alt="run buddy title"/>
                <p>Run Buddy</p></a>
            </div>
            <div class="image-2">
                <a href="https://ahuber25.github.io/" target="_blank" rel="noopener noreferrer"><img src="../images/horiseon.jpg" alt="horiseon project"/>
                <p>Horiseon</p></a>
            </div>
            <div class="image-2">
                <a href="https://cmarvann.github.io/Group2-Project1/index.html" target="_blank" rel="noopener noreferrer"><img src="../images/ampersand.png" alt="first dnd creator"/>
                <p>First D&D Creator</p></a>
            </div>
            <div class="image-2">
                <a href="https://dry-sands-22029.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img src="../images/4e_black_dragon.webp" alt="second D&D creator"/>
                <p>Second D&D Creator</p></a>
            </div>
            <div class="image-2">
                <a href="/index.html" target="_blank" rel="noopener noreferrer"><img src="../images/horiseon.jpg" alt="horiseon project"/>
                <p>More to come.</p></a>
            </div>
        </div>
    </section>
    

    )

}

export default Portfolio;