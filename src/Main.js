import React from 'react';
import HornedBeast from './HornedBeast';
import CardColumns from 'react-bootstrap/CardColumns';
import './Main.css'




class Main extends React.Component {
  // constructor(props){
  //   super()
  //   this.state={
  //     data: this.props.info
  //   }
  // }
  render() {
    console.log(this.props.info)
    let beastArray = this.props.info.map ( animal => {
      return <HornedBeast
        key= {animal.title}
        name = {animal.keyword}
        title = {animal.title}
        image_url = {animal.image_url}
        description = {animal.description}
        />
    });

    return (
        <CardColumns>
        {beastArray}
        </CardColumns>
    );
  }
}

export default Main;