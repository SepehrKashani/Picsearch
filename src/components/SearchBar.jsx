import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: "",
  };

  //   handleInputChange(event) {
  //     console.log(event.target.value);
  //   }

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={e => this.handleFormSubmit(e)}>
          <div>
            <input
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              type="text"
              placeholder="Search free high quality photos"
              className="form-control"
              id="searchBar"
              aria-describedby="SearchbarInput"
            ></input>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default SearchBar;
