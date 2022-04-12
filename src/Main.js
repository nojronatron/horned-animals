import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';

class Main extends React.Component {
  render() {
    let beasts = [];
    data.forEach((beast, idx) => {
      beasts.push(
        <HornedBeast
          title={beast.title}
          imageUrl={beast.image_url}
          description={beast.description}
          key={idx}
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