import React from "react";

import "./MoreHelp.css";

const MoreHelp = (props) => {
  const Services = [
    { text: "Yes, please.", 
      handler: props.actionProvider.categories, 
      id: 1 },
    { text: "No, thank you.", 
    handler: props.actionProvider.goodbye, 
    id: 2 },
  ];

  const Markup = Services.map((service) => (
    <button
      className="renewallocation-button"
      key={service.id}
      onClick={service.handler}
    >
      {service.text}
    </button>
  ));

  return (
  <div className="renewallocation-container">
    {Markup}
  </div>
  );
};

export default MoreHelp;