import React from "react";
import Avatar from '@material-ui/core/Avatar';
import Bavaria from '../../Images/Bavaria - Copia.jpg';

const BotAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div className="react-chatbot-kit-chat-bot-avatar-container">
        <Avatar alt="BavariaBot" src={Bavaria} />
      </div>
    </div>
  );
};

export default BotAvatar;