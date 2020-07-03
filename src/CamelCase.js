import React from "react";

export default class CamelCase extends React.Component {
  state = {
    sentence: "",
    camelCase: ""
  };

  handleChange = e => {
    const sentence = e.target.value;
    this.setState({ sentence });
  };

  toCamelCase = () => {
    const { sentence } = this.state;

    const camelCaseSentence = sentence
      .split(" ")
      .map((palabra, index) => {
        if (index === 0) return palabra.toLowerCase();

        return (
          palabra.charAt(0).toUpperCase() + palabra.slice(1).toLocaleLowerCase()
        );
      })
      .join("");

    this.setState({ camelCase: camelCaseSentence });
  };

  render() {
    return (
      <div>
        <h4>Ingresa una frase</h4>
        <input value={this.state.sentence} onChange={this.handleChange} />
        <button onClick={this.toCamelCase}>convertir a camel case</button>
        <h4 id="frase-cortada">
          la frase en camel case es: {this.state.camelCase}
        </h4>
      </div>
    );
  }
}
