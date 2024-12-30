/* eslint-disable react/prop-types */

import tools from "../assets/imgs/tools.png";
import link from "../assets/imgs/link.png";
import code from "../assets/imgs/code.png";

export default function Slide({ project }) {
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
          {project.techs.map((item) => (
            <>
              <button className="techs">{item}</button>
            </>
          ))}
        </p>
        <p>
          <a href={project.link} target="blank">
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
