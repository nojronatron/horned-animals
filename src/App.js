import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import data from './data.json';

function App() {
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

export default App;
