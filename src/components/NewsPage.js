import React, { Component } from "react";
import axios from "axios";

import NewsList from "./NewsList";

const baseUrl = "https://newsapi.org/v2";
const apiKey = "a29ad96430b4438f971b739050e9c5e5";
const newsTopic = "everything";
const quryTerm = "google";

var url = "";

class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articlesArray: []
    };
  }

  componentDidMount() {
    let promiseArray = this.props.selectedSources.map(el =>
      axios.get(`${baseUrl}/${newsTopic}?sources=${el}&apiKey=${apiKey}`)
    );
    var gists = [];
    Promise.all(promiseArray)

      .then(results => {
        Promise.resolve(Promise.resolve(results)).then(function(val) {
          val.map(el => gists.push(...el.data.articles));
        });
        const articlesArray = gists;

        this.setState({
          articlesArray
        });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div className="newsList">
        <NewsList className="newsListElement" post={this.state.articlesArray} />
      </div>
    );
  }
}

export default NewsPage;
