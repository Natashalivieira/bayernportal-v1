import React from 'react';
import "./Citizens.css";

const Citizens = (props) => {
  const citizenServices = [
    { text: "Residence registration", handler: () => {}, id: 1 },
    { text: "Income tax class", handler: () => {}, id: 2 },
    { text: "ID card", 
      handler: props.actionProvider.handleIDcard, 
      id: 3,
    },
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
  
  export default Citizens;