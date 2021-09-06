import React, { FC, useState } from "react";
import "./projects.scss"
import BarkingRoad from "./slides/barkingRoad/barkingRoad";
import FieldRoad from "./slides/fieldRoad/fieldRoad";
import KatherineRoad from "./slides/katherineRoad/katherineRoad";

const Projects: FC = () => {

    const slides = ['BarkingRoad', 'FieldRoad', 'KatherineRoad'];
    const [slide, setSlide] = useState(0);

    const slidePrev = () => {
        if (slide <= 0) return;
        setSlide(slide - 1);
        renderComponent();
    };

    const slideNext = () => {
        if (slide >= slides.length - 1) return;
        setSlide(slide + 1);
        renderComponent();
    };

    const renderComponent = () => {
        switch (slides[slide]) {
            case 'BarkingRoad':
                return <BarkingRoad />;
            case 'FieldRoad':
                return <FieldRoad />;
            case 'KatherineRoad':
                return <KatherineRoad />;
            default:
                return null;
        }

    }


    return (
        <main className="boomerang-projects">
            <div className="boomerang-projects-flash">
                <h1>Projects</h1>
            </div>
            <div className="boomerang-projects-info">
                <div className="boomerang-slide-holder">
                    <div><button>Contact</button></div>
                    <div className="slider-column">
                        <div className="slider">
                            <a className="prev" onClick={slidePrev}>Previous</a>
                            <h2>Barking Road, London</h2>
                            <a className="next" onClick={slideNext}>Next</a>
                        </div>
                        {
                            renderComponent()
                        }
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Projects;