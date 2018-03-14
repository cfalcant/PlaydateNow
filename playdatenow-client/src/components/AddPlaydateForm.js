import React, { Component } from 'react'
import {Button, Row, Col, Form, FormGroup, Label, Input} from 'reactstrap'

class AddPlaydateForm extends Component {
    state = {
        showAddNewPlaydateForm: false,
        place: '',
        address: '',
        date: '',
        acivity: '',
        notes: '',
        playdate_creator: ''
    }

    toggleAddNewPlaydate = () => {
       this.setState({showAddNewPlaydateForm: !this.state.showAddNewPlaydateForm});
    }

    render () {
        return <div>
            <button onClick={this.toggleAddNewPlaydate}>
              Add New Playdate
            </button>
            {this.state.showAddNewPlaydateForm ? <Row>
                <Col>
                  <Form>
                    <FormGroup>
                      <Label>Place</Label>
                      <Input onChange={e => this.setState({
                            place: e.target.value
                          })} type="text" id="firstNameInput" />
                      <Label>Address</Label>
                      <Input onChange={e => this.setState({
                            address: e.target.value
                          })} type="text" id="lastNameInput" />
                      <Label>Date</Label>
                      <Input onChange={e => this.setState({
                            date: e.target.value
                          })} type="text" id="emailInput" />
                      <Label>Activity</Label>
                      <Input onChange={e => this.setState({
                            activity: e.target.value
                          })} type="text" id="passwordInput" />
                      <Label>Notes</Label>
                      <Input onChange={e => this.setState({
                            notes: e.target.value
                          })} type="text" id="passwordInput" />
                    </FormGroup>
                  </Form>
                  <Button color="primary" type="submit">
                    Save changes
                  </Button>
                </Col>
              </Row> : null}
          </div>;
    }

}

export default AddPlaydateForm