import React from "react";
import "../../css/project.css";

function RoadmapContent(props) {
  return (
    <section id="roadmap" className="projects-section">
      <h2 className="projects-section-header">My Web Developer Roadmap</h2>
      <div className="project-section-post">
        <p>
          There are many ways you can go about picking up the skills you need to
          become a developer.
        </p>
        <p>
          There are linear curriculums that teach you a bit of everything - like
          freeCodeCamp's full stack development curriculum.
        </p>
        <p>
          And then there are massive lists of skills - and sometimes lists of
          resources - you can use to "choose your own adventure" through the
          learning process.
        </p>
        <p>
          One of the best such list of skills is
          <a href="https://twitter.com/kamranahmedse">Kamran Ahmed's</a>
          Developer Roadmap, which he regularly updates.
        </p>
        <p>
          This is no ordinary list of resources. Kamran has painstakingly mapped
          out all the skills he feels are essential to breaking into different
          fields of development.
        </p>
        <p>
          I've written about his roadmap in the past. And to celebrate us all
          being half way into 2019, I'm going to share his entire roadmap here -
          all three of them.
        </p>
        <p>
          That's right - he has lists of tools and resources that are required
          for the following paths:
        </p>
        <ul>
          <li>Front end web development</li>
          <li>Back end web development</li>
          <li>
            DevOps (also known as "site reliability" - this is sort of an
            evolution of the old System Administrator role)
          </li>
        </ul>
      </div>
      <a
        href="https://www.freecodecamp.org/news/2019-web-developer-roadmap/"
        className="btn btn-show-all"
        target="_blank"
      >
        Show Details
        <i className="fas fa-chevron-right" />
      </a>
    </section>
  );
}

export default RoadmapContent;
