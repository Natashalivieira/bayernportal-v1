import React from 'react';
import "./RenewalAge.css";

const RenewalAge = (props) => {
  const Services = [
    { text: "Yes, I'm over 18",
      handler: props.actionProvider.handleRenewalLocation, 
      id: 1 },
    { text: "No, I'm under 18", handler: () => {}, id: 2 },
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
  
  export default RenewalAge;