import React from "react";

export default class Capitalize extends React.Component {
  state = {
    sentence: "",
    capitalized: ""
  };

  handleChange = e => {
    const sentence = e.target.value;
    this.setState({ sentence });
  };

  toCamelCase = string => {
    const capitalize = string => {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    const words = string.split(/[\s|\-|_]+/);
    const camelCase = [
      words[0].toLowerCase(),
      ...words.slice(1).map(w => capitalize(w))
    ].join("");

    this.setState({ ...this.state, camelCase });
  };

  render() {
    return (
      <div>
        <h4>Ingresa una frase</h4>
        <input value={this.state.sentence} onChange={this.handleChange} />
        <button onClick={this.toCapitalize}>cortar</button>
        <h4 id="frase-cortada">
          la frase con mayúsculas es: {this.state.camelCase}
        </h4>
      </div>
    );
  }
}
