import React from "react";
import "./about.css";
import { GiGraduateCap } from "react-icons/gi";
import { BsBookmarkStar } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import Profile_Photo from "../../assets/Photo.jpg";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Profile_Photo} className="image" alt="Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Degree</h5>
              <small>
                BTech
                <br />
                <i>SRKR Engineering College</i>
              </small>
            </article>
            <article className="about__card">
              <BsBookmarkStar className="about__icon" />
              <h5>CGPA</h5>
              <small>8.12</small>
            </article>
            <article className="about__card">
              <TfiWorld className="about__icon" />
              <h5>Domain</h5>
              <small>Fresher</small>
            </article>
          </div>
          <p>
            I'm a <b>Btech Graduate</b> at SRKR Engineering College. I'm an
            enthusiastic and driven Software Engineering aspirant seeking a
            challenging job opportunity to apply and expand my technical skills.
            With a strong academic foundation in software engineering and
            hands-on experience in various programming languages, I am eager to
            contribute to innovative projects and learn from experienced
            professionals in the industry. I am a quick learner who is always
            ready to face challenges.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;
