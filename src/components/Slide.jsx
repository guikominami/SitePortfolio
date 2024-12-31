/* eslint-disable react/prop-types */
import { useEffect } from "react";
import tools from "../assets/imgs/tools.png";
import link from "../assets/imgs/link.png";
import code from "../assets/imgs/code.png";

import "./Slide.css";

export default function Slide({ project }) {
  useEffect(() => {
    console.log("entrou");
    const timer = setTimeout(() => {}, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [project]);

  return (
    <div className="slide">
      <div className="content-img">
        <img src={project.img} alt="" />
      </div>
      <div className="content-text">
        <h1>{project.title}</h1>
        <p>{project.descriptionEn}</p>
        <p>
          <img className="icon" src={tools} alt="" />
          {project.techs.map((item, index) => (
            <>
              <button key={index} className="techs">
                {item}
              </button>
            </>
          ))}
        </p>
        <p>
          <a href={project.link} target="_blank">
            <img className="icon" src={link} alt="" />
          </a>
          {project.code && (
            <a href={project.code} target="blank">
              <img className="icon" src={code} alt="" />
            </a>
          )}
        </p>
      </div>
    </div>
  );
}
