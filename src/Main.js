import React from 'react';
// import data  from "./data.json";
import HornedBeast from './HornedBeast.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './Main.css'

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allBeasts: this.props.data
    }
  }
  render() {
    // console.log(this.state.allBeasts)
    return (
      <main>
        <p>{this.props.test}</p>
        <Container>
          <Row>
            {this.props.data.map((animal) =>
              <HornedBeast
                name = {animal.keyword}
                title={animal.title}
                imageUrl={animal.image_url}
                description={animal.description}
                key={animal._id}
                horns={animal.horns}
                handleClick={() => this.props.handleClick(animal)}
              />)}
          </Row>
        </Container>
      </main>
    )
  }
}
export default Main;
