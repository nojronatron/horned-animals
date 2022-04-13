import React from 'react';
import Card from 'react-bootstrap/Card';

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
      <Card border="info" style={{ width: '18rem', margin: '10px'}}>
        <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Header>&#x1F493; count: {this.state.clicks}</Card.Header>
        <Card.Img
          src={this.props.imageUrl}
          alt={this.props.description}
          title={this.props.title}
          className="clickable-img"
          onClick={this.handleClick} />
        <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
        </Card>
      </>
    );
  }
}
// width="300"
// height="auto"

export default HornedBeast;