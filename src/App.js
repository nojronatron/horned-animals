import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import data from './data.json';

class App extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {
      someThing: false,
    }
  }

  setSomeThing = () => {
    this.setState({
      someThing: !this.state.someThing,
    });
  }

  render() {
    return (
      <>
          <Header />
          <div className="beast-layout">
            <Main beasts={data} />
          </div>
          <Footer />
      </>
    );
  }
}

export default App;
