import React from "react";

import "./RenewalResult.css";

const RenewalResult = (props) => {
  return (
  <div className="renewallocation-container">
  <ul className="link-list">
    <li className="link-list-item">
    <a
      href={"https://www.muenchen.de/rathaus/terminvereinbarung_bb.html"}
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

export default RenewalResult;