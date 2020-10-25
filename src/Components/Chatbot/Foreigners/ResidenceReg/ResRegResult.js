import React from "react";

import "./ResRegResult.css";

const ResRegResult = (props) => {
  return (
  <div className="renewallocation-container">
  <ul className="link-list">
    <li className="link-list-item">
    <a
      href={"https://www.muenchen.de/rathaus/home_en/Department-of-Public-Order/Registration-Deregistration.html"}
      target="_blank"
      rel="noopener noreferrer"
      className="link-list-item-url"
    >
      Download the form
    </a>
    <a
      href={"https://www.muenchen.de/rathaus/home_en/Department-of-Public-Order/Registration-Deregistration.html"}
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

export default ResRegResult;