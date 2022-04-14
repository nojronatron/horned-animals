import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import SelectedBeast from './HornedBeast.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beastName: '',
    }
  }

  showModalHandler = (beastTitle) => {
    this.setState({
      beastName: beastTitle,
      showModal: true
    });
  };

  hideModalHandler = () => {
    this.setState({
      beastName: '',
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
          <Modal.Header>
            Your Selected Beast
          </Modal.Header>
          <Modal.Body>

          <SelectedBeast
            title={this.beastName}
            imageUrl=''
            description={this.beastName}
            key={this.beastName}
          />

          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.hideModalHandler}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default App;
