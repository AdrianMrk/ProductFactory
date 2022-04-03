import React, { useState } from "react";

const Experience = () => {
  const [selectedSection, setSelectedSection] = useState("before");

  return (
    <article className="container container-article container-experience">
      <section className="section-header">
        <h3 className="container-article-header">
          <div>Experience</div>
          <div className="topText">Course Experience</div>
        </h3>
      </section>
      <section className="section-select">
        <div className="wrapper">
          <input
            type="radio"
            name="select"
            id="after"
            checked={selectedSection == "after"}
            onChange={(e) => setSelectedSection(e.target.id)}
          />
          <input
            type="radio"
            name="select"
            id="during"
            checked={selectedSection == "during"}
            onChange={(e) => setSelectedSection(e.target.id)}
          />
          <input
            type="radio"
            name="select"
            id="before"
            checked={selectedSection == "before"}
            onChange={(e) => setSelectedSection(e.target.id)}
          />
          <label htmlFor="after" className="option option-1">
            <span>After attending the course</span>
          </label>
          <label htmlFor="during" className="option option-2">
            <span>During the period</span>
          </label>
          <label htmlFor="before" className="option option-3">
            <span>Before attending the course</span>
          </label>
        </div>
      </section>
      <section>
        <img src="/factory_icon.png" className="experience-image" alt="me" />

        <span className="section-text container-text ">
          {selectedSection == "before" && (
            <>
              This course has been attempted by zero people who are eager to
              learn product design, especially user experience and user
              interface, so it is not a prerequisite, but due to the limited
              capacity of the priority course with early enrolled people, others
              can participate in future courses. . <br />  Obviously, the
              ability to use tools like Adobe Photoshop and Adobe Illustrator as
              well as Microsoft Word, Excel tools, and of course a lot of
              enthusiasm and energy,
            </>
          )}
          {selectedSection == "during" && (
            <>
              During the period,This course has been attempted by zero people
              who are eager to learn product design, especially user experience
              and user interface, so it is not a prerequisite, but due to the
              limited capacity of the priority course with early enrolled
              people, others can participate in future courses.
            </>
          )}
          {selectedSection == "after" && (
            <>
              After attending the course,This course has been attempted by zero
              people who are eager to learn product design, especially user
              experience and user interface, so it is not a prerequisite, but
              due to the limited capacity of the priority course with early
              enrolled people, others can participate in future courses.
            </>
          )}
        </span>
      </section>
    </article>
  );
};
export default Experience;
