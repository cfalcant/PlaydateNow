import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateUser} from '../redux/actions/users'
import { Container, Row, Col, Form, FormGroup, Input, Label, Card, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';
import UpdateAcctInfoForm from './UpdateAcctInfoForm'

class UserDashboard extends Component {
    state = {
        showUpdateInfoForm: false,
        id: 1,
        firstname: 'Carlos',
        lastname: 'Alcantar',
        email: 'carlos@aol.com',
        password: 'carlos'
    }

    toggleUpdateInfoForm = () => {
        this.setState({showUpdateInfoForm: !this.state.showUpdateInfoForm});
    }

    submitForm = (e) => {
        e.preventDefault()
        this.props.updateUser({
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          password: this.state.user.password
        });
    }

    render () {
        return <Container className="text-center" className="border-warning mb-3">
            <Row>
              <Col>
                <Card>
                  <CardTitle className="text-primary">
                    <div>
                      <h4>Your Information</h4>
                    </div>
                  </CardTitle>
                  <CardSubtitle>
                    Name: {this.state.firstname} {this.state.lastname}
                  </CardSubtitle>
                  <CardText>
                    <br />
                    Email: <span>{this.state.email}</span>
                    <br />
                    Password: <span>{this.state.password}</span>
                  </CardText>
                  <Button onClick={this.toggleUpdateInfoForm} color="warning">
                    Click here to edit your information
                  </Button>
                </Card>
              </Col>
              <Col>
                {this.state.showUpdateInfoForm ? <Row>
                    <Col>
                      <Form onSubmit={this.submitForm}>
                        <FormGroup>
                          <Label>First Name</Label>
                          <Input onChange={e => this.setState({
                                firstname: e.target.value
                              })} type="text" id="firstNameInput" />
                          <Label>Last Name</Label>
                          <Input onChange={e => this.setState({
                                lastname: e.target.value
                              })} type="text" id="lastNameInput" />
                          <Label>E-Mail</Label>
                          <Input onChange={e => this.setState({
                                email: e.target.value
                              })} type="text" id="emailInput" placeholder="New Email Address" />
                          <Label>Password</Label>
                          <Input onChange={e => this.setState({
                                password: e.target.value
                              })} type="text" id="passwordInput" placeholder="New Password" />
                        </FormGroup>
                      </Form>
                      <Button color="primary" type="submit">Save changes</Button>
                    </Col>
                  </Row> : null}
              </Col>
            </Row>
          </Container>;
    }
}

function mapDispatchToProps(dispatch) {
  return {
    updateUser: bindActionCreators(updateUser, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(UserDashboard)