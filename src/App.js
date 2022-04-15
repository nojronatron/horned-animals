import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import { Modal, Form } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      modalTitle: '',
      modalImgurl: '',
      modalDescription: '',
      filteredData: data,
    }
  }

  showModalHandler = (beastTitle, beastDescription, beastPic) => {
    this.setState({
      modalTitle: beastTitle,
      modalDescription: beastDescription,
      modalImgurl: beastPic,
      showModal: true
    });
  };

  hideModalHandler = () => {
    this.setState({
      modalTitle: '',
      modalImgurl: '',
      modalDescription: '',
      showModal: false
    });
  };

  handleSelect = event => {
    let choice = event.target.value;
    // console.log(choice);

    if (choice === 'single') {
      // console.log('user selected "single"');
      let newData = data.filter(animal => animal.horns === 1);
      this.setState({filteredData: newData});
    } else
      if (choice === 'few') {
        // console.log('user selected "few"');
        let newData = data.filter(animal => animal.horns > 1 && animal.horns < 100);
        this.setState({filteredData: newData});
      } else
      if (choice === 'many') {
        // console.log('user selected "many"');
        let newData = data.filter(animal => animal.horns === 100);
        this.setState({filteredData: newData});
      } else {
        // console.log('user selected "all"');
        this.setState({
          filteredData: data
        })
      }
  }

  render() {

    return (
      <>
        <Header />
        <div className="beast-layout">
          <Form>
            <Form.Label>Filter the beasts:</Form.Label>
            <Form.Select
              name="select"
              onChange={this.handleSelect}>
              <option value="all">All Beasts</option>
              <option value="many">Many Horns</option>
              <option value="few">Few Horns</option>
              <option value="single">Single Horns</option>
            </Form.Select>
          </Form>
          <Main
            beasts={this.state.filteredData}
            showModalHandler={this.showModalHandler}
          />
        </div>
        <Footer />
        <Modal
          show={this.state.showModal}
          onHide={this.hideModalHandler}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.state.modalTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={this.state.modalImgurl}
              alt={this.state.modalDescription}
              width="100%" height="auto" />
          </Modal.Body>
          <Modal.Footer>
            {this.state.modalDescription}
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default App;
