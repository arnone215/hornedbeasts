import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js'
import SelectedBeast from './SelectedBeast';
import DropdownSelection from './DropdownSelection';

import data from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      beast: data,
      chosenBeast: null,
    }
  }

  showBeastInModal = (clickedBeast) => {
    console.log(clickedBeast);
    this.setState({
      show: true,
      chosenBeast: clickedBeast,
      
    }) 
    // console.log(clickedBeast);
  }

  hideBeastInModal = () => {
    this.setState({
      show: false,
    })
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <Header />
        <DropdownSelection />
        <Main 
          beast={this.state.beast}
          handleClick={this.showBeastInModal}
        />
        {!this.state.show ? "" : 
          <SelectedBeast
        show={this.state.show}
        hideBeast={this.hideBeastInModal}
        beast={this.state.chosenBeast}
        />}
        
        <Footer />
      </div>
    )
  }
}


export default App;
