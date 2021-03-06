import React, { Component } from "react";
import { connect } from "react-redux";

class SceneSelect extends Component {
  render() {
    const { allowNone, maps, dispatch, ...rest } = this.props;
    return (
      <select {...rest}>
        {allowNone && <option>None</option>}
        {maps.map((map, index) => (
          <option key={map.id} value={map.id}>
            {map.name || "Scene " + (index + 1)}
          </option>
        ))}
      </select>
    );
  }
}

function mapStateToProps(state) {
  return {
    maps: (state.project.present && state.project.present.scenes) || []
  };
}

export default connect(mapStateToProps)(SceneSelect);
