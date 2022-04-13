import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import data from './data.json';
import Modal from 'react-bootstrap/Modal';

class App extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedBeast: {}
    }
  }

  showModalHandler = (beast) => {
    this.setState({
      selectedBeast: beast,
      showModal: true
    });
  };

  hideModalHandler = () => {
    this.setState({
      showModal: false
    });
  };

  render() {
    return (
      <>
          <Header />
          <div className="beast-layout">
            <Main 
            beasts={data}
            showModalHandler={this.showModalHandler}
             />
          </div>
          <Footer />
          <Modal
            show={this.state.showModal}
            onHide={this.hideModalHandler}
            >
              <Modal.Header closeButton>
                {this.state.selectedBeast}
              </Modal.Header>
            </Modal>
      </>
    );
  }
}

export default App;
