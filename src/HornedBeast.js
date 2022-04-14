import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    };
  }

  handleHeartClick = () => {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  handleImageClick = () => {
    this.props.showModalHandler(this.props.title, this.props.description, this.props.imageUrl);
  }

  render() {
    return (
      <>
      <Card border="info" style={{ width: '18rem', margin: '10px'}}>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Header
            onClick={this.handleHeartClick}>
            &#x1F493; count: {this.state.clicks}
            </Card.Header>
          <Card.Img
            src={this.props.imageUrl}
            alt={this.props.description}
            title={this.props.title}
            onClick={this.handleImageClick}
            className="clickable-img"
            />
          <Card.Text>{this.props.description}</Card.Text>
        </Card.Body>
        </Card>
      </>
    );
  }
}

export default HornedBeast;