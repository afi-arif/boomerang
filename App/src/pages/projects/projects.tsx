import React, { FC } from "react";
import "./projects.scss"
import BarkingRoad from "./slides/barkingRoad/barkingRoad";

const Projects: FC = () => {
    return (
        <main className="boomerang-projects">
            <div className="boomerang-projects-flash">
                <h1>Projects</h1>
            </div>
            <div className="boomerang-projects-info">
                <div className="boomerang-slide-holder">
                    <button>Contact</button>
                    <div className="slider">
                        <a className="prev">Previous</a>
                        <h2>Barking Road, London</h2>
                        <a className="next">Next</a>
                    </div>
                    <BarkingRoad />
                </div>
            </div>
        </main>
    )
}

export default Projects;