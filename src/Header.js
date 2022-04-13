import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAzure: true,
    };
  }

  handleToggle = () => {
    this.setState({
      isAzure: !this.state.isAzure,
    });
  }

  // Idea was mine but code revised per https://stackoverflow.com/questions/41978408/changing-style-of-a-button-on-click
  render() {
    let toggleClass = this.state.isAzure ? "azure-backgnd" : "otha-backgnd";
    return (
      <div className={toggleClass} onClick={this.handleToggle}>HornedBeast Lab React App</div>
    );
  }
}

export default Header