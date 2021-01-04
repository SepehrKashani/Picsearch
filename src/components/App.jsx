import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import "bootstrap/dist/css/bootstrap.css";
import unsplash from "../api/unsplash";

class App extends Component {
  state = {
    images: [],
  };

  handleSearchResult = async term => {
    const response = await unsplash.get("search/photos", {
      params: {
        query: term,
        per_page: 30,
      },
    });
    // console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    if (this.state.images.length === 0) {
      return (
        <div style={{ padding: 32 }}>
          <div className="w-50 p-3 mx-auto">
            <SearchBar onSubmit={this.handleSearchResult} />
          </div>

          <ImageList images={this.state.images} />
        </div>
      );
    }
    return (
      <div style={{ padding: 32 }}>
        <div className="w-50 p-3 mx-auto">
          <SearchBar onSubmit={this.handleSearchResult} />
          <div
            className="alert alert-success"
            role="alert"
            style={{ marginTop: 8 }}
          >
            <p style={{ margin: 0 }}>Found {this.state.images.length} images</p>
          </div>
        </div>

        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
