import React, { useState, useEffect } from "react";

const Projects = () => {
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(1);

  const projectList = [
    {
      name: "Design to do list app",
      desc: `The previous student design project was the To Do List
      application product factory, The counter examples are the result
      of the efforts of the students and their teamwork in the first
      course.`,
      points: [
        "Experience teamwork in a real product team and a collaborative effort for a common goal.",
        "Survey real users and needs assessment and find the most suitable solution to their problems.",
        "Design experience from notebooks to user interface design software.",
      ],
    },
    {
      name: "2Design to do list app",
      desc: `2The previous student design project was the To Do List
      application product factory, The counter examples are the result
      of the efforts of the students and their teamwork in the first
      course.`,
      points: [
        "2Experience teamwork in a real product team and a collaborative effort for a common goal.",
        "2Survey real users and needs assessment and find the most suitable solution to their problems.",
        "2Design experience from notebooks to user interface design software.",
      ],
    },
    {
      name: "3Design to do list app",
      desc: `3The previous student design project was the To Do List
      application product factory, The counter examples are the result
      of the efforts of the students and their teamwork in the first
      course.`,
      points: [
        "3Experience teamwork in a real product team and a collaborative effort for a common goal.",
        "3Survey real users and needs assessment and find the most suitable solution to their problems.",
        "3Design experience from notebooks to user interface design software.",
      ],
    },
  ];

  useEffect(() => {
    setTotal(projectList.length);
  }, []);

  const nextProject = () => {
    setCount(count < projectList.length ? count + 1 : count);
  };
  const prevProject = () => {
    setCount(count > 1 ? count - 1 : count);
  };
  return (
    <article className="fullwidth-article ">
      <div className="container container-project">
        <section className="section-header">
          <h3 className="container-article-header">
            <div>Projects</div>
            <div className="topText">Projects</div>
          </h3>
        </section>
        <section className="text-section">
          <header>
            <h2 className="header"><div className="dot"></div>{projectList[count - 1].name}</h2>
            <span className="section-text">{projectList[count - 1].desc}</span>
          </header>
          {projectList[count - 1].points.map((text) => {
            return (
              <div className="points">
                <div className="dot">&#10003;</div>
                <div>{text}</div>
              </div>
            );
          })}
          <div className="counter">
            {count}/{total}
          </div>
        </section>

        <section className="section-preview">
          <div className="preview-container">
            <div className="preview-shadow"></div>
            <div className="preview-look"></div>
            <div className="preview-buttons prev" onClick={prevProject}>
              ❮
            </div>
            <div className="preview-buttons next" onClick={nextProject}>
              ❯
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};
export default Projects;
