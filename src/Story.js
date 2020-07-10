import React from 'react';

class Story extends React.Component {

  render() {
    const {url, title} = this.props.story;
    return (
      <div className="Story">
        <a href={url}>{title}</a>
      </div>
    );
  }
}

export default Story;
