import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      
      
      {/* My Experience Section */}
      <h2>My Experience</h2>
<div className="container internship__container">
  <div className="internship__experience">
    <h3>Internship Experience</h3>
    <div className="experience__content">
      <article className="experience__details">
        <BsFillPatchCheckFill className="experience__details-icon" />
        <div>
          <h4>IIDT-Blackbucks Engineers</h4>
          <small className="text-light">
            <strong>Full Stack Development Intern</strong> <br />
            <em>May 2024 | Hyderabad</em>
          </small>
          <p>
            • Gained hands-on experience in full-stack development through a user-centric web application. <br />
            • Enhanced my skills in the MERN stack, focusing on MongoDB, Express, React, and Node.js. <br />
            • Collaborated with a team to enhance user engagement and improve user experience design.
          </p>
        </div>
      </article>
    </div>
  </div>
</div>

    </section>
  );
};

export default Experience;
