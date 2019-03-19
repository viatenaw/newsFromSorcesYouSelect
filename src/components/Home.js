import React, { Component } from "react";
import SourcesPage from "./SourcesPage";
import NewsPage from "./NewsPage";

class Home extends Component {
  state = {
    selectedSources: [],
    selected: false,
    instruction: false,
    sourceDisplay: true
  };
  addSelected = props => {
    this.setState(prevState => ({
      selectedSources: prevState.selectedSources.concat(props.id)
    }));
  };

  go = () => {
    this.setState({
      selected: true,
      instruction: true
    });
  };
  change = () => {
    this.setState({
      selectedSources: []
    });
  };
  removeInstruction = () => {
    this.setState({
      instruction: false,
      sourceDisplay: false
    });
  };

  render() {
    return (
      <div className="row">
        {this.state.sourceDisplay ? (
          <SourcesPage
            className="col-4"
            addSelected={this.addSelected}
            selectedSources={this.state.selectedSources}
            go={this.go}
            removeInstruction={this.removeInstruction}
          />
        ) : (
          ""
        )}
        <br />
        <div className="col-4">
          <button
            className="goButton btn btn-primary"
            type="submit"
            onClick={this.go}
          >
            GO
          </button>
          <br />
          <form onSubmit={this.change}>
            {" "}
            <button className="changeButton btn btn-warning" type="submit">
              Change Sources
            </button>
          </form>
        </div>
        {this.state.instruction ? (
          <h1 className="instructions" id="msg">
            {" "}
            Wait for a second then Press Enable
          </h1>
        ) : (
          ""
        )}

        {this.state.selected ? (
          <NewsPage
            className="newsPageAll"
            selectedSources={this.state.selectedSources}
          />
        ) : (
          <div className="instructions">
            <h1>Instructions</h1>
            <ul>
              <li>Select the News Sources from the checklist</li>
              <li>Press "Go"</li>
              <li>Wait for one or two seconds</li>
              <li>Press "Enable"</li>
              <li>Press "Change Sources" to reselect the Sources</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
