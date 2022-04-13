import React from 'react';
import './hornedbeast.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0
    }
  }

  imageClicked = () => {
    this.setState({
      clicks: this.state.clicks + '🖤'
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
          {this.props.title}
        </h2>
        <img src={this.props.imageUrl} 
        alt={this.props.description} 
        title={this.props.title}
         />
        <p>
          {this.props.description}
        </p>
      </>
    )
  }
}
export default HornedBeast;