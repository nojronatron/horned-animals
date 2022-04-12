import React from 'react';
import HornedBeast from './HornedBeast.js';

class Main extends React.Component {
    render() {
      return (
        <>
          <div>
            <HornedBeast title='test beast' description='testing component creation' imageUrl='' />
          </div>
        </>
    );
  }
}

export default Main