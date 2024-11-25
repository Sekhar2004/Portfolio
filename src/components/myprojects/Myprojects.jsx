import React from "react";
import "./myprojects.css";
import IMG2 from "../../assets/Blog-it.png";
import IMG3 from "../../assets/Blog-it.png";
import IMG4 from "../../assets/Focusite.png";

import IMG5 from "../../assets/YT-CLONE.png"
import IMG6 from "../../assets/TaskManager.png"
import IMG7 from "../../assets/InstantTranfer.png"
import IMG8 from "../../assets/Resume.png"

const Myprojects = () => {
  return (
    <section id="myprojects">
      <h5>My Recent Works</h5>
      <h2>My Projects</h2>
      <div className="container portfolio__container">
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Blog-it</h3>
          <small className="text-light">React JS</small>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Sekhar2004/BlogIt"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://blog-it-nu.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Focusite</h3>
          <small className="text-light">HTML | CSS | Bootstrap</small>
          <div className="portfolio__item-cta">
          <a
              href="https://github.com/Sekhar2004/Focusite-adv"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://focusite.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>YT-CLONE</h3>
          <small className="text-light">REACT | RAPID API | MATERIAL UI</small>
          <div className="portfolio__item-cta">
          <a
              href="https://github.com/Sekhar2004/YT-clone"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://yt-clone-theta-eight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG7} alt="" />
          </div>
          <h3>Instant-Transfer</h3>
          <small className="text-light">REACT | Tailwind CSS</small>
          <div className="portfolio__item-cta">
          <a
              href="https://github.com/Sekhar2004/Paytm"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://instant-transfer-virid.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Task-Manager</h3>
          <small className="text-light">HTML | CSS</small>
          <div className="portfolio__item-cta">
          <a
              href="https://github.com/Sekhar2004/Manager"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://manager-eight-omega.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Visit Website
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG8} alt="" />
          </div>
          <h3>My Resume</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://drive.google.com/file/d/1mfu7H46_puJCfqLhCl-uvpvSnb-VEHxW/view?usp=sharing"  //add resume link
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Check it Out !
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Myprojects;