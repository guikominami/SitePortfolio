// https://stackademic.com/blog/mastering-react-carousel-building-dynamic-image-sliders

import { useState } from "react";
// import Slide from "./Slide";

import "./Carousel.css";
import buttonNext from "../assets/imgs/button_next.png";
import buttonPrev from "../assets/imgs/button_prev.png";

import { defineSwipe, Swipeable } from "react-touch";
// import { projects } from "../data";
import projectsJsonData from "../assets/data.json";

import Slide from "./Slide";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const baseDir = import.meta.env.BASE_URL;

  const project = projectsJsonData[activeIndex];

  const swipe = defineSwipe({ swipeDistance: 50 });

  function nextSlide() {
    setActiveIndex((prevIndex) =>
      activeIndex === projectsJsonData.length - 1 ? 0 : prevIndex + 1
    );
  }

  function prevSlide() {
    setActiveIndex((prevIndex) =>
      activeIndex === 0 ? projectsJsonData.length - 1 : prevIndex - 1
    );
  }

  return (
    <section className='main-carousel'>
      <div className='progress-bar'>
        {projectsJsonData.map((item, index) => (
          <span
            key={index}
            className={index === activeIndex ? "dot-big" : "dot-small"}
          ></span>
        ))}
      </div>
      <Swipeable
        config={swipe}
        onSwipeRight={prevSlide}
        onSwipeLeft={nextSlide}
      >
        <div className='main-slide'>
          <div className='content-button'>
            <button onClick={prevSlide}>
              <img src={buttonPrev} />
            </button>
          </div>
          <Slide project={project} />
          <div className='content-button'>
            <button onClick={nextSlide}>
              {" "}
              <img src={buttonNext} />
            </button>
          </div>
        </div>
      </Swipeable>
    </section>
  );
}
