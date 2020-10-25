class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    
    intro() {
      const introMessage = this.createChatBotMessage("I am Bavaria Digital Shapers, daughter of Digital Shapers, granddaughter of DPS and goddaughter of the Bavarian Ministry for Digital Affairs");
      this.updateChatbotState(introMessage);
    }
    greet() {
      const greetingMessage = this.createChatBotMessage("Hey there!")
      const initialMessage = this.createChatBotMessage("I'm here to help you. First, let me know who you are:", 
      { widget: "learningOptions" }
      );
      this.updateChatbotState(greetingMessage);
      this.updateChatbotState(initialMessage);
    };
    
    goodbye = () => {
      const goodbyeMessage = this.createChatBotMessage("Alright. I hope I could help you. Have a nice day!")
      this.updateChatbotState(goodbyeMessage);
    };
    
    categories = () => {
      const message = this.createChatBotMessage(
        "Let me know in which category you want to find information:", 
        { widget: "learningOptions" }
      );
      this.updateChatbotState(message);
    };

    handleCitizens = () => {
      const message = this.createChatBotMessage(
        "Fantastic! Here are the most searched services for citizens:",
        { widget: "citizens" }
      );
      this.updateChatbotState(message);
    };

    handleIDcard = () => {
      const message = this.createChatBotMessage(
        "Nice! And what do you want to know about the ID card?",
        { widget: "IDcard" }
      );
      this.updateChatbotState(message);
    };

    handleRenewalAge = () => {
      const message = this.createChatBotMessage(
        "Cool! For that I need to know if you are over 18 years old:",
        { widget: "RenewalAge" }
      );
      this.updateChatbotState(message);
    };

    handleRenewalLocation = () => {
      const message = this.createChatBotMessage(
        "Alright! May I access your location so that I can direct you to your closest citizens office?",
        { widget: "RenewalLocation" }
      );
      this.updateChatbotState(message);
    };
    
    handleRenewalResult = () => {
      const message = this.createChatBotMessage(
        "The closest office to you is: Kreisverwaltungsreferat (KVR) Hauptabteilung II, Risenfeldstraße 75, 80809 München. Phone number: 089 233 96000.");
      const message2 = this.createChatBotMessage(
        "You can also make an appointment online. Just click on the button below and it will open a new tab with their website:",
        { widget: "RenewalResult" }
      );
      const message4 = this.createChatBotMessage("Is there anything else I can help you with?",
        { widget: "MoreHelp" }
      );
      this.updateChatbotState(message);
      this.updateChatbotState(message2);
      this.updateChatbotState(message4);
    };

    handleForeigners = () => {
      const message = this.createChatBotMessage(
        "Fantastic! Here are the most searched services for foreigners:",
        { widget: "foreigners" }
      );
      this.updateChatbotState(message);
    };

    handleApplyVisa = () => {
      const message = this.createChatBotMessage(
        "Great! What kind of visa are you looking for?",
        { widget: "ApplyVisa" }
      );
      this.updateChatbotState(message);
    };

    handleGermanCourse = () => {
      const message = this.createChatBotMessage(
        "You will have to book an online appointment to make the application. Here are the documents you will need:"
      );
      const message2 = this.createChatBotMessage(
        "A valid passport, passport picture, confirmation of attendance of a language course with at least 20 hours/week, proof of adequate health insurance, proof of adequate funding, residence registration in the city, and the application form (in the website link)"
      );
      const message3 = this.createChatBotMessage(
        "Click on the buttons below and a new tab will open with the authorities website:",
        { widget: "GermanCourse" }
      );
      const message4 = this.createChatBotMessage("Is there anything else I can help you with?",
        { widget: "MoreHelp" }
      );
      this.updateChatbotState(message);
      this.updateChatbotState(message2);
      this.updateChatbotState(message3);
      this.updateChatbotState(message4);
    };
    
    handleResRegLoc = () => {
      const message = this.createChatBotMessage(
        "Great! Can I access your location to direct you to the responsible authority?",
        { widget: "ResRegLoc" }
      );
      this.updateChatbotState(message);
    };
    handleResRegResult = () => {
      const message1 = this.createChatBotMessage("To do the Residence/New Address Registration, you need to go in person or you may give a letter or authorisation to another person to do the registration for you.");
      const message2 = this.createChatBotMessage("The documents you will need: a valid passport or ID card, and a form signed by your landlord or property owner. ");
      const message3 = this.createChatBotMessage(
        "This form you can find by clicking on the button below, which will open a new tab of the website of the responsible public authority:",
        { widget: "ResRegResult" }
      );
      const message4 = this.createChatBotMessage("Is there anything else I can help you with?",
        { widget: "MoreHelp" }
      );
      this.updateChatbotState(message1);
      this.updateChatbotState(message2);
      this.updateChatbotState(message3);
      this.updateChatbotState(message4);
    };
    
    updateChatbotState(message) {
   
  // NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.
   
      
     this.setState(prevState => ({
        ...prevState, messages: [...prevState.messages, message]
      }))
    }

  }
  
  export default ActionProvider;