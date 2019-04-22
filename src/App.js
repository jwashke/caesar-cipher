import React from "react";
import ReactDOM from "react-dom";

import Paper from "@material-ui/core/Paper";

import Shift from "./components/Shift";
import Text from "./components/Text";

class App extends React.Component {
  state = {
    shiftAmount: 0,
    plaintext: "",
    ciphertext: ""
  };

  handleShiftChange = event => {
    this.setState({
      shiftAmount: event.target.value
    });
  };

  handlePlaintextChange = event => {
    const text = event.target.value;
    this.setState({
      plaintext: event.target.value,
      ciphertext: this.applyCipher(text)
    });
  };

  handleCiphertextChange = event => {
    const text = event.target.value;
    this.setState({
      ciphertext: text,
      plaintext: this.applyCipher(text, true)
    });
  };

  applyCipher(text, reverse) {
    const shiftAmount = reverse
      ? -this.state.shiftAmount
      : this.state.shiftAmount;
    let cipheredText = "";
    for (let i = 0; i < text.length; i++) {
      const letter = text[i];
      if (letter.match(/[a-z]/i)) {
        const charCode = text.charCodeAt(i);
        const startingCode = letter.toUpperCase() === letter ? 65 : 97;
        let shiftedCode = charCode - startingCode + shiftAmount;
        shiftedCode = shiftedCode >= 26 ? shiftedCode - 26 : shiftedCode;
        shiftedCode += startingCode;
        cipheredText += String.fromCharCode(shiftedCode);
      } else {
        cipheredText += letter;
      }
    }
    return cipheredText;
  }

  render() {
    return (
      <div className="container">
        <Paper elevation={1}>
          <h1>Caesar Cipher</h1>
          <div className="inputs">
            <Shift
              shiftAmount={this.state.shiftAmount}
              handleChange={this.handleShiftChange}
            />
            <div className="text">
              <Text
                id="plain-text"
                label="Plain text"
                value={this.state.plaintext}
                handleChange={this.handlePlaintextChange}
              />
            </div>
            <div className="text">
              <Text
                id="cipher-text"
                label="Cipher text"
                value={this.state.ciphertext}
                handleChange={this.handleCiphertextChange}
              />
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
