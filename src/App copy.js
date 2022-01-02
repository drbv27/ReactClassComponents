import { Component } from "react";

class Button extends Component {
  state = {};
  constructor(props) {
    super(props);
    console.log("constructor", props);
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("component did update", prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("Desmontando componente", this.props, this.state);
  }

  render() {
    console.log("Ejecutando metodo Render en el Button");
    return <button onClick={() => this.setState({ prop: 1 })}>Enviar</button>;
  }
}

class App extends Component {
  state = { valor: 3 };
  render() {
    console.log(this.state);
    return (
      <div>
        <p>Hola Mundo</p>
        {this.state.valor === 3 ? <Button gatito="Orion" /> : null}
        <button
          className={`${this.state.valor}`}
          onClick={() => this.setState({ valor: 2 })}
        >
          Enviar en App
        </button>
      </div>
    );
  }
}

export default App;
