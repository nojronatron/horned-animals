import React from 'react';
import HornedBeast from './HornedBeast.js';
import './main.css';

class Main extends React.Component {
  render() {
    let beasts = this.props.beasts.map((beast, idx) => {
      return (
        <HornedBeast
          title={beast.title}
          imageUrl={beast.image_url}
          description={beast.description}
          key={idx}
          showModalHandler={this.props.showModalHandler}
          />
        )
    });

    return (
      <>
        {beasts}
      </>
    );
  }
}

export default Main