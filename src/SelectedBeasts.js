import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './SelectedBeast.css'


class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal className="modalContainer" show={this.props.show} onHide={this.props.hideBeast}>
        <Modal.Header className="header" closeButton>
          <Modal.Title className="title">{this.props.beast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="body" >
          <p>{this.props.beast.description}</p>
          <img src={this.props.beast.image_url} alt={this.props.beast.title} style={{ width: '90%' }} />
        </Modal.Body>
        <Modal.Footer className="footer">
          <Button variant="info" onClick={this.props.hideBeast}>
            CLOSE
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}


export default SelectedBeast;