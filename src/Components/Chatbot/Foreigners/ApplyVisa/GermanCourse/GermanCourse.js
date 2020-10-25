import React from "react";

import "./GermanCourse.css";

const GermanCourse = (props) => {
  return (
  <div className="renewallocation-container">
  <ul className="link-list">
    <li className="link-list-item">
    <a
      href={"https://www.muenchen.de/rathaus/home_en/Department-of-Public-Order/Foreigners-Office/student-visa-residence/visa-for-academic-studies.html"}
      target="_blank"
      rel="noopener noreferrer"
      className="link-list-item-url"
    >
      Application form
    </a>
    <a
      href={"https://service.muenchen.de/intelliform/forms/01/02/abh-kontakt/index"}
      target="_blank"
      rel="noopener noreferrer"
      className="link-list-item-url"
    >
      Book your appointment
    </a>
    </li>
  </ul>
  </div>
  );
};

export default GermanCourse;