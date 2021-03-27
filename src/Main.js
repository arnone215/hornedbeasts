import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import CardColumns from 'react-bootstrap/CardColumns';
import './Main.css'
import 'bootstrap/dist/css/bootstrap.min.css';



class Main extends React.Component {
  render() {
    let beastArray = data.map ( animal => {
      return <HornedBeast
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