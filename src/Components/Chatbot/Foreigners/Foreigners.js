import React from 'react';
import "./Foreigners.css";

const Foreigners = (props) => {
  const citizenServices = [
    { text: "Apply for a Visa", 
      handler: props.actionProvider.handleApplyVisa, 
      id: 1,
    },
    { text: "Extend Visa", handler: () => {}, id: 2 },
    { text: "Residence Registration", 
      handler: props.actionProvider.handleResRegLoc,
      id: 3 },
    { text: "Other", handler: () => {}, id: 3 },
  ];

  const citizensMarkup = citizenServices.map((service) => (
    <button
      className="citizens-button"
      key={service.id}
      onClick={service.handler}
    >
      {service.text}
    </button>
  ));

  return <div className="citizens-container">{citizensMarkup}</div>;
};
  
  export default Foreigners;