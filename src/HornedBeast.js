import React from 'react';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      imageUrl: props.imageUrl,
      description: props.description
    };
  }
  render() {
    return (
      <>
        <h2>{this.title}</h2>
        <img src={this.imageUrl} alt={this.description} title={this.title}></img>
        <p>{this.description}</p>
      </>
    );
  }
}

export default HornedBeast