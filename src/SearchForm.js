import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(evt) {
    this.setState({ searchTerm: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateSearchTerm(this.state.searchTerm); 
  }

  render() {
    return (
      <div className="SearchForm">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="searchTerm">Search Term:</label>
          <input id="searchTerm" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
