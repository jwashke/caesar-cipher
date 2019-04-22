import React from "react";
import TextField from "@material-ui/core/TextField";

class Text extends React.Component {
  render() {
    return (
      <TextField
        id={this.props.id}
        label={this.props.label}
        value={this.props.value}
        onChange={this.props.handleChange}
        margin="normal"
      />
    );
  }
}

export default Text;
