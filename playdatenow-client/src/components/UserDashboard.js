import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateUser} from '../redux/actions/users'
import { Container, Row, Col, Form, FormGroup, Input, Label, Card, CardTitle, CardSubtitle, CardText, Button, Jumbotron} from 'reactstrap';
// import UpdateAcctInfoForm from './UpdateAcctInfoForm'

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
        return (
        <div>
        <Jumbotron>
        <h1>Welcome to PlaydateNOW!</h1>
        <h5>Making it easy to find and make new friends!</h5>
        <hr/>
        <p>Use our app to find playdates and other family-friendly events near you! Created by parents for children of all ages (yes, that includes pets!). Still have questions? Click Below</p>
          <Button outline color="primary">Learn More</Button>
        </Jumbotron>
        <Container className="text-center" className="border-warning mb-3">
            {/* <Row> */}
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
              {/* <Col> */}
              {this.state.showUpdateInfoForm ? <Row>
                  <Col>
                    <Form onSubmit={this.submitForm}>
                      <FormGroup>
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
                    <Row>
                      <Col>
                        <Button color="success" type="submit">
                          Save changes
                        </Button>
                        <Button color="danger" type="">
                          Delete account
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row> : null}
              {/* </Col> */}
            {/* </Row> */}
          </Container>
          </div>
    )
   }
}

function mapDispatchToProps(dispatch) {
  return {
    updateUser: bindActionCreators(updateUser, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(UserDashboard)