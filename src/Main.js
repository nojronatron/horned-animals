import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';
// import './index.css';

class Main extends React.Component {
  render() {
    let beasts = [];
    data.forEach((beast) => {
      beasts.push(
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