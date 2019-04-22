import React from "react";
import ReactDOM from "react-dom";

import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

class Shift extends React.Component {
  options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  render() {
    return (
      <div className="shift">
        <Select
          value={this.props.shiftAmount}
          onChange={this.props.handleChange}
          displayEmpty
        >
          {this.options.map(num => {
            return (
              <MenuItem key={num} value={num}>
                {num}
              </MenuItem>
            );
          })}
        </Select>
      </div>
    );
  }
}

export default Shift;
