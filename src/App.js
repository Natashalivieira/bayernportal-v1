import React, { useState, useEffect, Suspense, lazy } from 'react';

import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header'
import ScrollToTop from './Components/ScrollToTop';
import Home from './Pages/Home/Home';
import "./App.css";

// import { ReactComponent as ButtonIcon } from "./Images/message.svg";
// import Chatbot from "react-chatbot-kit";
// import { ConditionallyRender } from "react-util-kit";
// import config from "./Components/Chatbot/config";
// import MessageParser from "./Components/Chatbot/MessageParser";
// import ActionProvider from "./Components/Chatbot/ActionProvider";

function App() {
  // const [showChatbot, toggleChatbot] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      {/* <div className="app-chatbot-container">
          <ConditionallyRender
            ifTrue={showChatbot}
            show={
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            }
          />
        </div>
      <button
          className="app-chatbot-button"
          onClick={() => toggleChatbot((prev) => !prev)}
        >
          <ButtonIcon className="app-chatbot-button-icon" />
        </button> */}
    </Router>
  );
}

export default App;
