import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import BeastForm from './BeastForm';
import SelectedBeast from './SelectedBeasts.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props); 
      this.state = {
        show: false,
        beast: {},
        hornedBeastRender: data
      }
    }

    showBeastInModal = (clickedBeast) => {
      this.setState({
        show: true,
        beast: clickedBeast
      })
    }

    hideBeastInModal = () => {
      this.setState({
        
        show: false,
        beast: {}
      })
    }

    findFilteredHornedBeast = findFilteredHornedBeast => {
      this.setState({hornedBeastRender: findFilteredHornedBeast});
    }
  

  render() {
    return (
    <div>
      <Header />
      <BeastForm
      animals={data}
      findFilteredHornedBeast={this.findFilteredHornedBeast}
      />
      <SelectedBeast
      show={this.state.show}
      hideBeast={this.hideBeastInModal}
      beast={this.state.beast}
      />
      <Main
      animals={this.state.hornedBeastRender}
      handleClick={this.showBeastInModal}
      />
      <Footer />
    </div>
    );
  }
}
export default App;
