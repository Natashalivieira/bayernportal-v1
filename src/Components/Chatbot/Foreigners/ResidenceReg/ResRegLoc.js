import React from 'react';
import "./ResRegLoc.css";

const ResRegLoc = (props) => {
  const Services = [
    { text: "Yes",
      handler: props.actionProvider.handleResRegResult, 
      id: 1 },
    { text: "No", handler: () => {}, id: 2 },
  ];

  const Markup = Services.map((service) => (
    <button
      className="renewalage-button"
      key={service.id}
      onClick={service.handler}
    >
      {service.text}
    </button>
  ));

  return <div className="renewalage-container">{Markup}</div>;
};
  
  export default ResRegLoc;