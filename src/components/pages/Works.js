import React from "react";
import Project from "../layouts/Project";
import {
  projects,
  projects2,
  section3Title,
  section4Title,
  section6Title,
  section7Title,
  projects3,
  projects4,
} from "../../profile";

const Works = () => {
  return (
    <>
      <div data-aos="zoom-in-up" data-aos-once="true" className="third">
        <center>
          <div className="pp-head-line">
            <h1 id="Projects" className="red-line pp-head">
              {section3Title}
            </h1>
          </div>
        </center>
        <div className="row">
          {projects &&
            projects.map((x) => (
              <Project id={x.id} url={x.url} name={x.name} skills={x.skills} />
            ))}
        </div>
      </div>
      <div data-aos="zoom-in-up" data-aos-once="true" className="third">
        <center>
          <div className="pp-head-line">
            <h1 id="Projects" className="red-line pp-head">
              {section6Title}
            </h1>
          </div>
        </center>
        <div className="row">
          {projects2 &&
            projects2.map((x) => (
              <Project id={x.id} url={x.url} name={x.name} skills={x.skills} />
            ))}
        </div>
      </div>
      <div data-aos="zoom-in-up" data-aos-once="true" className="third">
        <center>
          <div className="pp-head-line">
            <h1 id="Projects" className="red-line pp-head">
              {section7Title}
            </h1>
          </div>
        </center>
        <div className="row">
          {projects3 &&
            projects3.map((x) => (
              <Project id={x.id} url={x.url} name={x.name} skills={x.skills} />
            ))}
        </div>
      </div>
      <div className="third">
        <center>
          <div className="pp-head-line">
            <h1 id="Projects" className="red-line pp-head">
              {section4Title}
            </h1>
          </div>
        </center>
        <div className="row">
          {projects4 &&
            projects4.map((x) => (
              <Project id={x.id} url={x.url} name={x.name} skills={x.skills} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Works;
