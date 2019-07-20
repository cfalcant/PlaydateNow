import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { addPlaydate } from "../redux/actions/playdates";
import {Button, Row, Col, Form, FormGroup, Label, Input, Container} from 'reactstrap'

class AddPlaydateForm extends Component {
    state = {
        showAddNewPlaydateForm: false,
        place: '',
        address: '',
        date: '',
        activity: '',
        notes: ''
    }

    toggleAddNewPlaydate = () => {
       this.setState({showAddNewPlaydateForm: !this.state.showAddNewPlaydateForm});
    }

    handleSubmit = (e) => {
      // console.log('Hi!')
      this.props.addPlaydate({
            place: this.state.place,
            address: this.state.address,
            date: this.state.date,
            activity: this.state.activity,
            notes: this.state.notes
    });
    }

    render () {
        return <div>
            <Button color="primary" onClick={this.toggleAddNewPlaydate}>
              Ready? Add A New Playdate!
            </Button>
            {this.state.showAddNewPlaydateForm ? <Container>
                <Row>
                  <Col>
                    <Form onSubmit={this.handleSubmit}>
                      <br />
                      <FormGroup>
                        <Label>Place</Label>
                        <Input onChange={e => this.setState({
                              place: e.target.value
                            })} type="text" id="firstNameInput" />
                        <br />
                        <Label>Address</Label>
                        <Input onChange={e => this.setState({
                              address: e.target.value
                            })} type="text" id="lastNameInput" />
                        <br />
                        <Label>Date</Label>
                        <Input onChange={e => this.setState({
                              date: e.target.value
                            })} type="text" id="emailInput" />
                        <br />
                        <Label>Activity</Label>
                        <Input onChange={e => this.setState({
                              activity: e.target.value
                            })} type="text" id="passwordInput" />
                        <br />
                        <Label>Notes</Label>
                        <Input onChange={e => this.setState({
                              notes: e.target.value
                            })} type="text" id="passwordInput" />
                      </FormGroup>
                    </Form>
                    <Button onClick={this.handleSubmit} color="primary" type="submit">
                      SUBMIT
                    </Button>
                  </Col>
                </Row>
              </Container> : 
            null}
          </div>;
    }

}


const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addPlaydate
    },
    dispatch
  );

export default connect(null, mapDispatchToProps)(AddPlaydateForm);
// export default AddPlaydateForm