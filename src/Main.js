import React from 'react';
import HornedBeast from './HornedBeast.js';

class Main extends React.Component {
    render() {
      return (
        <>
          <div class='main'>
            <p>This is a horned beast!</p>
            <HornedBeast title='test beast' description='short and spindly' imageUrl='' />
          </div>
          <div class='main'>
            <p>This is a horned beast!</p>
            <HornedBeast title='beast no. 2' description='tall and shaggy' imageUrl='' />
          </div>
        </>
    );
  }
}

export default Main