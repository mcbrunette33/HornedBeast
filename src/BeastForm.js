import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import './BeastForm';

class BeastForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectHorns: 'horns'
    };
  }

  handleHornsSelected = event => {
    const horns = parseInt(event.target.value);
    if (horns) {
      let findFilteredHornedBeast = this.props.animals.filter(animal => animal.horns === horns);
      this.props.findFilteredHornedBeast(findFilteredHornedBeast);
    } else {
      this.props.findFilteredHornedBeast(this.props.animals)
    }
  }

  render() {
    return (
      <Container className="formContainer">
        <Form>
          <Form.Group controlId="Choose_Horns">
            <Form.Label>
              <p>Choose your Horns</p>
            </Form.Label>
            <Form.Control as="select" onChange={this.handleHornsSelected}>
              <option value="All">All Horned Beasts</option>
              <option value="1">1 Horn</option>
              <option value="2">2 Horns</option>
              <option value="3">3 Horns</option>
              <option value="100">100 Horns</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default BeastForm;