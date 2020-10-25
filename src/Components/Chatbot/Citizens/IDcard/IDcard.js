import React from 'react';
import "./IDcard.css";

const IDcard = (props) => {
  const IDServices = [
    { text: "I want to apply for one", handler: () => {}, id: 1 },
    { text: "I need to renew it", 
      handler: props.actionProvider.handleRenewalAge, 
      id: 2 },
    { text: "I lost mine", handler: () => {}, id: 3 },
    { text: "Mine got stolen", handler: () => {}, id: 3 },
  ];

  const IDMarkup = IDServices.map((idservice) => (
    <button
      className="idcard-button"
      key={idservice.id}
      onClick={idservice.handler}
    >
      {idservice.text}
    </button>
  ));

  return <div className="idcard-container">{IDMarkup}</div>;
};
  
  export default IDcard;