import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./BotAvatar";
import LearningOptions from "./LearningOptions/LearningOptions";
import Citizens from "./Citizens/Citizens";
import IDcard from "./Citizens/IDcard/IDcard";
import RenewalAge from "./Citizens/IDcard/Renewal/RenewalAge";
import RenewalLocation from "./Citizens/IDcard/Renewal/RenewalLocation";
import RenewalResult from "./Citizens/IDcard/Renewal/RenewalResult";
import Foreigners from "./Foreigners/Foreigners";
import ApplyVisa from "./Foreigners/ApplyVisa/ApplyVisa";
import GermanCourse from "./Foreigners/ApplyVisa/GermanCourse/GermanCourse";
import ResRegLoc from "./Foreigners/ResidenceReg/ResRegLoc";
import ResRegResult from "./Foreigners/ResidenceReg/ResRegResult";
import MoreHelp from "./MoreHelp";

const config = {
  botName: "Bavaria",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#0099D5",
    },
    chatButton: {
      backgroundColor: "#0099D5",
    },
  },
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props}/>,
    // userAvatar: (props) => <BotAvatar {...props}/>,
  },
  initialMessages: 
    [ createChatBotMessage(`Servus! My name is Bavaria.`),
      createChatBotMessage
      (`I'm here to help you find information about public services. First, let me know who you are:`, 
        { widget: "learningOptions" }
      ),
    ],

widgets: [
  {
    widgetName: "learningOptions",
    widgetFunc: (props) => <LearningOptions {...props} />,
  },
  {
    widgetName: "citizens",
    widgetFunc: (props) => <Citizens {...props} />,
  },
  {
    widgetName: "IDcard",
    widgetFunc: (props) => <IDcard {...props} />,
  },
  {
    widgetName: "RenewalAge",
    widgetFunc: (props) => <RenewalAge {...props} />,
  },
  {
    widgetName: "RenewalLocation",
    widgetFunc: (props) => <RenewalLocation {...props} />,
  },
  {
    widgetName: "RenewalResult",
    widgetFunc: (props) => <RenewalResult {...props} />,
  },
  {
    widgetName: "foreigners",
    widgetFunc: (props) => <Foreigners {...props} />,
  },
  {
    widgetName: "ApplyVisa",
    widgetFunc: (props) => <ApplyVisa {...props} />,
  },
  {
    widgetName: "GermanCourse",
    widgetFunc: (props) => <GermanCourse {...props} />,
  },
  {
    widgetName: "ResRegLoc",
    widgetFunc: (props) => <ResRegLoc {...props} />,
  },
  {
    widgetName: "ResRegResult",
    widgetFunc: (props) => <ResRegResult {...props} />,
  },
  {
    widgetName: "MoreHelp",
    widgetFunc: (props) => <MoreHelp {...props} />,
  },
 ],
};

export default config