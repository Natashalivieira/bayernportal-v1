import React from 'react';
import "./ApplyVisa.css";

const ApplyVisa = (props) => {
  const citizenServices = [
    { text: "University", handler: () => {}, id: 1 },
    { text: "German Course", 
      handler: props.actionProvider.handleGermanCourse, 
      id: 2 },
    { text: "Work", handler: () => {}, id: 3 },
    { text: "Other", handler: () => {}, id: 4 },
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
  
  export default ApplyVisa;