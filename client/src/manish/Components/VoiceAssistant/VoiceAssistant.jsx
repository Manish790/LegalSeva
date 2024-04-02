import React, { Component } from "react";

class VoiceAssistant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spokenOnce: false, // Flag to track if instructions have been spoken
    };
  }

  componentDidMount() {
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      const recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      recognition.continuous = false;

      recognition.onstart = () => {
        console.log("Voice recognition started...");
        this.setState({ listening: true });
      };

      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        this.setState({ listening: false });
      };

      recognition.onend = () => {
        console.log("Voice recognition ended.");
        this.setState({ listening: false });
      };

      // Initialize the SpeechSynthesis object
      const synth = window.speechSynthesis;

      // Function to make the assistant speak
      const speak = (message) => {
        const utterance = new SpeechSynthesisUtterance(message);
        synth.speak(utterance);
      };

      // Trigger instructions when the component mounts and the flag is false
      if (!this.state.spokenOnce) {
        const helpMessage =
          'To use our website, you can speak your questions or commands. For example, you can say "Hello" or "Tell me a joke."';
        speak(helpMessage);
        this.setState({ spokenOnce: true });
      }

      // Start voice recognition automatically
      recognition.start();
    }
  }

  render() {
    return (
      <div>
        {/* You can add a visual indicator here to show that voice recognition is active */}
        {this.state.listening && <p>Listening...</p>}
      </div>
    );
  }
}

export default VoiceAssistant;
