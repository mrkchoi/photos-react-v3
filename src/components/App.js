import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {
    images: []
  };
  onFormSubmit = async term => {
    const response = await unsplash.get("/photos", {
      params: {
        query: term
      }
    });
    this.setState({ images: response.data.results });
    console.log(response.data.results);
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
