import React, { Component } from "react";
import Source from "./Source";
import axios from "axios";

const url = `https://newsapi.org/v2/sources?apiKey=a29ad96430b4438f971b739050e9c5e5`;

class SourcesPage extends Component {
  state = {
    sourcesArray: []
  };

  componentDidMount() {
    console.log("Mounted, Lets Fetch Data!");
    axios
      .get(url)
      .then(res => {
        const sourcesArray = res.data;
        this.setState({ sourcesArray });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  addSource = props => {
    this.props.addSelected(props);
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.removeInstruction();
  };

  render() {
    const { sources } = this.state.sourcesArray;
    return (
      <form className="sourcesPage form-check" onSubmit={this.handleSubmit}>
        <button
          className="enableButton btn btn-success"
          type="submit"
          onClick={this.addSource}
        >
          Enable
        </button>
        <Source
          sources={sources}
          status={this.state.disableStatus}
          addSource={this.addSource}
        />
      </form>
    );
  }
}

export default SourcesPage;
