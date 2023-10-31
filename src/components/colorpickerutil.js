import { Component } from "react";
import '../styles/styles.css'

export class ColorPickerutil extends Component {
  constructor(props) {
    super(props);
    this.color = props.color;
    this.state = {
      toggle: true
    };
  }
  changeColor = () => {
    let root = document.getElementById("root");
    root.style.backgroundColor = this.color;
    this.setState({
      toggle: false
    });
  };
  render() {
    const style = {
      backgroundColor: this.color
    };
    return <div id="sq" style={style} onClick={this.changeColor}></div>;
  }
}
