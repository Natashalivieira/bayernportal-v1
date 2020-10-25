import React, { useState } from 'react';
import Tour from 'reactour';

const steps = [
  {
    selector: '.first-step',
    content: 'This is my first Step',
  },
  // ...
];

const App = () => {
  const [isTourOpen, setIsTourOpen] = useState(false);

  return (
    <>
      { /* other stuff */}
      <Tour
        steps={steps}
        isOpen={isTourOpen}
        onRequestClose={() => setIsTourOpen(false)}
      />
    </>
  )
};