import { Component } from "react";
import { ColorPickerutil } from "./colorpickerutil";
import '../styles/styles.css'

export class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }
  settoggle = () => {
    const tg = this.state.toggle;
    if (tg) {
      this.setState({
        toggle: false
      });
    } else {
      this.setState({
        toggle: true
      });
    }
  };
  render() {
    return (
      <div id="main-container" style={{paddingTop:"50vh"}}>
        {this.state.toggle ? (
          <div id="container">
            <ColorPickerutil color="#fe0000" />
            <ColorPickerutil color="#00ff00" />
            <ColorPickerutil color="#0000fe" />
            <ColorPickerutil color="#ffff00" />
            <ColorPickerutil color="#fe00fe" />
            <ColorPickerutil color="#00ffff" />
            <ColorPickerutil color="#fea500" />
            <ColorPickerutil color="#81007f" />
            <ColorPickerutil color="#ffc0cb" />
            <ColorPickerutil color="#008000" />
            <ColorPickerutil color="#fe6347" />
            <ColorPickerutil color="#00cfd1" />
            <ColorPickerutil color="#8b4413" />
            <ColorPickerutil color="#ff8b00" />
            <ColorPickerutil color="#4683b4" />
            <ColorPickerutil color="#fed700" />
          </div>
        ) : (
          <div></div>
        )}
        <button onClick={this.settoggle}>Pick a Color</button>
      </div>
    );
  }
}
