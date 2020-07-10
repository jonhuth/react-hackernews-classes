import React from 'react';
import SearchForm from './SearchForm';
import Story from './Story';
import axios from 'axios';

class StoryList extends React.Component {

  BASE_URL = 'https://hn.algolia.com/api/v1/search?query=';

  constructor(props) {
    super(props);
    this.state = { stories: [] };

    this.updateSearchTerm = this.updateSearchTerm.bind(this);
  }

  async componentDidMount() {
    const response = await axios.get(`${this.BASE_URL}react`);

    this.setState({ stories: response.data.hits });
  }

  async updateSearchTerm(str) {
    const response = await axios.get(`${this.BASE_URL+str}`);

    this.setState({ stories: response.data.hits});
  }

  render() {
    return (
      <div className="StoryList">
        <SearchForm updateSearchTerm={this.updateSearchTerm} />
        <ul>
          {this.state.stories.map(story => <Story story={story} />)}
        </ul>
      </div>
    );
  }
}

export default StoryList;