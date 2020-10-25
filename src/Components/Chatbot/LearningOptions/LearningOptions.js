import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    { text: "Citizen",
      handler: props.actionProvider.handleCitizens,
      id: 1,
    },
    { text: "Foreigner", 
    handler: props.actionProvider.handleForeigners,
    id: 2,
  },
    { text: "Entrepreneur", handler: () => {}, id: 3 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;