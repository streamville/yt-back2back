import React, { Component } from 'react'

export class SearchBar extends Component {
  state = { term: '' };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <h1>Youtube Back2Back</h1>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>What do you want to watch?</label>
            <input 
              type="text" 
              value={this.state.term}
              onChange={this.onInputChange} 
              />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
