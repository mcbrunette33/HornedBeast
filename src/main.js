import React from 'react';
import data  from "./data.json";
import HornedBeast from './hornedbeast.js';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class Main extends React.Component {
  render() {
    return (
      <main>
        <Container>
          <Row>
            {data.map((animal) =>
              <HornedBeast
                name = {animal.keyword}
                title={animal.title}
                imageUrl={animal.image_url}
                description={animal.description}
                key={animal._id}
                handleClick={this.props.handleClick}
              />)}
          </Row>
        </Container>
      </main>
    )
  }
}
export default Main;
