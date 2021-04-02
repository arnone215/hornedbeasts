import React from 'react';
import HornedBeast from './HornedBeast';
import CardColumns from 'react-bootstrap/CardColumns'
import './Main.css';


class Main extends React.Component {
    render() {



        return (
            <main>
                <CardColumns>
                    {
                        !this.props.filteredBeast ? this.props.beast.map((beast, index) => (
                            <HornedBeast
                                name={beast.keyword}
                                title={beast.title}
                                image_url={beast.image_url}
                                description={beast.description}
                                key={index}
                                handleClick={this.props.handleClick}
                            />
                        )) : this.props.filteredBeast.map((beast, index) => (
                            <HornedBeast
                                name={beast.keyword}
                                title={beast.title}
                                image_url={beast.image_url}
                                description={beast.description}
                                key={index}
                                handleClick={this.props.handleClick}
                            />
                        ))
                    }

                </CardColumns>
            </main>
        );
    }
}

export default Main;