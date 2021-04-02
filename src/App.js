
import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import data from './data.json';
import Footer from './Footer.js';

class App extends React.Component {
    constructor(props){
    super()
    this.state={
      
    }
  }
  render() {
    return(
      <div>
        <Header />
        <Main info={data} />
        <Footer />
      </div>
    )
  }
}

export default App;
