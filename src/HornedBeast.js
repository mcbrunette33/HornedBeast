import React from 'react';
import './HornedBeast.css';
import Card from 'react-bootstrap/Card';
class HornedBeast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0
    }
  }

  imageClicked = () => {
    this.setState({
      clicks: this.state.clicks + 1
    });
    this.props.handleClick({
      title: this.props.title,
      description: this.props.description,
      image_url: this.props.image_url
    })
  }
  render() {
    return (
      <>
        <h2>
        </h2>
        <p>
          {this.state.clicks}
          &hearts;
        </p>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" width = {250}
          src={this.props.imageUrl}
          alt={this.props.description}
          title={this.props.title} 
          onClick={this.imageClicked} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
          {this.props.description} 
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
}
export default HornedBeast;