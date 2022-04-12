import React from 'react';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    };
  }

  handleClick = () => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render() {
    console.log(this.props);
    return (
      <>
        <h2>{this.props.title}</h2>
        <p className="hearted-p">&#x1F493; count: {this.state.clicks}</p>
        <img
          width="300"
          height="auto"
          src={this.props.imageUrl}
          alt={this.props.description}
          title={this.props.title}
          className="clickable-img"
          onClick={this.handleClick}></img>
        <p>{this.props.description}</p>
      </>
    );
  }
}

export default HornedBeast;