import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';
// import './index.css';

class Main extends React.Component {
  render() {
    let beasts = this.props.data.map((beast, idx) => {
      return (
        <HornedBeast
          title={beast.title}
          imageUrl={beast.image_url}
          description={beast.description}
          key={beast.title}
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