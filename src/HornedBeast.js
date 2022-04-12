import React from 'react';

class HornedBeast extends React.Component {
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

export default HornedBeast;