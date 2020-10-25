class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      
      if (lowerCaseMessage.includes("hello")) {
        this.actionProvider.greet()
      }
    if (lowerCaseMessage.includes("hi")) {
      this.actionProvider.greet()
    }
    if (lowerCaseMessage.includes("servus")) {
      this.actionProvider.greet()
    }
    }

    parse(message) {
      const lowerCaseMessage = message.toLowerCase()
      
      if (lowerCaseMessage.includes("Who are you")) {
        this.actionProvider.intro()
      }
    if (lowerCaseMessage.includes("who")) {
      this.actionProvider.intro()
    }
    if (lowerCaseMessage.includes("what is this")) {
      this.actionProvider.intro()
    }
    }

    
}
  
  
  export default MessageParser;