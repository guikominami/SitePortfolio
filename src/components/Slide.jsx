/* eslint-disable react/prop-types */
import tools from "../assets/imgs/tools.png";
import link from "../assets/imgs/link.png";
import code from "../assets/imgs/code.png";

import "./Slide.css";
import { useState, useEffect } from "react";

export default function Slide({ project }) {
  const actualProject = project;
  const baseDir = import.meta.env.BASE_URL;

  const [showDelayedImage, setShowDelayedImage] = useState(false);

  useEffect(() => {
    setShowDelayedImage(false);
    setTimeout(() => {
      setShowDelayedImage(true);
    }, 100);
  }, [actualProject]);

  return (
    <div className='slide'>
      <div className='content-img'>
        {showDelayedImage && <img src={baseDir + project.img} alt='' />}
      </div>
      <div className='content-text'>
        <h1>{project.title}</h1>
        <p>{project.descriptionEn}</p>
        <div className='techsDiv'>
          <img className='icon' src={tools} alt='' />
          {project.techs.map((item, index) => (
            <span key={index}>
              <button className='techs'>{item}</button>
            </span>
          ))}
        </div>

        <p>
          <a href={project.link} target='_blank'>
            <img className='icon' src={link} alt='' />
          </a>
          {project.code && (
            <a href={project.code} target='blank'>
              <img className='icon' src={code} alt='' />
            </a>
          )}
        </p>
      </div>
    </div>
  );
}
