import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react';
import { Button, Modal,Form } from 'react-bootstrap';


class UpdateForm extends Component{
    render(){
        return(
            <div>
                {this.props.showModel && (
                    <Modal.Dialog>
                    <Modal.Header closeButton>
                      <Modal.Title>Update Model</Modal.Title>
                    </Modal.Header>
                  
                    <Modal.Body>
                    <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Flower name</Form.Label>
                                <Form.Control type="name" name='name' />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Flower image</Form.Label>
                                <Form.Control type="text"  name='img'/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>description</Form.Label>
                                <Form.Control type="text"  name='description'/>
                            </Form.Group>
                    </Form> 
                    </Modal.Body>
                  
                    <Modal.Footer>
                      <Button variant="secondary" >Close</Button>
                      <Button variant="primary" >Save changes</Button>
                    </Modal.Footer>
                  </Modal.Dialog>
                )}
            </div>
        )
    }
}

export default UpdateForm