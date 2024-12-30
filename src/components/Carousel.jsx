/* eslint-disable react/prop-types */
// https://stackademic.com/blog/mastering-react-carousel-building-dynamic-image-sliders

import { useState } from "react";

import "./Carousel.css";
import buttonNext from "../assets/imgs/button_next.png";
import buttonPrev from "../assets/imgs/button_prev.png";

import { projects } from "../data";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const project = projects[activeIndex];

  console.log(projects.length);

  function nextSlide() {
    console.log(activeIndex);
    setActiveIndex((prevIndex) =>
      activeIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
    console.log(activeIndex);
  }

  function prevSlide() {
    setActiveIndex((prevIndex) =>
      activeIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  }

  return (
    <section className="main-carousel">
      <div className="progress-bar">
        {projects.map((item, index) => (
          <>
            <span
              className={index === activeIndex ? "dot-big" : "dot-small"}
            ></span>
          </>
        ))}
      </div>
      <div className="main-slide">
        <div className="content-button">
          <button onClick={prevSlide}>
            <img src={buttonPrev} />
          </button>
        </div>
        <div className="slide">
          <div className="content-img">
            <img src={project.img} alt="" />
          </div>
          <div className="content-text">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <p>
              <b>Techs: </b>
              {project.techs}
            </p>
            <p>
              <b>App: </b>
              <a href={project.link}>#</a>
            </p>
            <p>
              {project.code && (
                <>
                  <b>Code: </b>
                  {project.code}
                </>
              )}
            </p>
          </div>
        </div>
        <div className="content-button">
          <button onClick={nextSlide}>
            {" "}
            <img src={buttonNext} />
          </button>
        </div>
      </div>
    </section>
  );
}
