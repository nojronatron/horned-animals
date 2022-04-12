import React from 'react';
import HornedBeast from './HornedBeast.js';

class Main extends React.Component {
  constructor(props) {
    super(props);
    render() {
      return (
        <>
          <div>
            <HornedBeast title={props.title} description={props.description} imageUrl={props.imageUrl} />
          </div>
        </>
      );
    }
  }
}

export default Main