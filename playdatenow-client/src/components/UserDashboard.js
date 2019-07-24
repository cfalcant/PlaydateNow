import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateUser} from '../redux/actions/users';
import { Container, Row, Col, Form, FormGroup, Input, Label, Card, CardTitle, CardSubtitle, Button, Jumbotron} from 'reactstrap';
import {BrowserRouter as Route, Link, Redirect} from "react-router-dom";
import FaqsPage from './Faqs'
// import UpdateAcctInfoForm from './UpdateAcctInfoForm'

class UserDashboard extends Component {
  state = {
    showUpdateInfoForm: false,
    id: 1,
    firstname: 'Carlos',
    lastname: 'Alcantar',
    email: 'carlos@a.com',
    password: 'carlos'
  }

  toggleUpdateInfoForm = () => {
    this.setState({showUpdateInfoForm: !this.state.showUpdateInfoForm});
  }

  // submitForm = (e) => {
  //   e.preventDefault()
  //   this.props.updateUser({
  //     firstname: this.state.firstname,
  //     lastname: this.state.lastname,
  //     email: this.state.email,
  //     password: this.state.user.password
  //   });
  // }
submitForm = (e) => {
  e.preventDefault();
  console.log('submit form works', this.state)
  this.setState({showUpdateInfoForm: false})

}

  render () {
    return (
    <div>
      <Jumbotron>
        <h1>Welcome to PlaydateNOW!</h1>
        <h5>Making it easy to find and make new friends!</h5>
        <hr />
        <p>
          Use our platform to find playdates and other family-friendly
          events near you! Created by parents for children of all
          ages. Have questions?
          Click Below
        </p>
        <br/>

        <Link to='/faqs' render={FaqsPage}>
        <Button outline color="info" >Learn More</Button>
        </Link>
      </Jumbotron>
      <Container className="text-center">
        <Col>
          <Card>
            <CardTitle className="text-info">
              <div>
                <h4>Your Information</h4>
              </div>
            </CardTitle>
            <CardSubtitle>
              Name: {this.state.firstname} {this.state.lastname}
              <br /> <br />
              Email: {this.state.email}
              <br /> <br />
              Password: {this.state.password} 
              <br /> <br />
            </CardSubtitle>
            <Button onClick={this.toggleUpdateInfoForm} color="warning" className='text-info'>
              Click here to edit your information
            </Button>
          </Card>
        </Col>
          
        {this.state.showUpdateInfoForm ? <Row>

        <Col>
        <br></br>
          <Form onSubmit={this.submitForm}>
            <FormGroup>
              <Label>E-Mail</Label>
              <Input onChange={e => this.setState({
              email: e.target.value
              })} 
              type="text" 
              id="emailInput" 
              placeholder="New Email Address" />
              <br></br>
              <Label>Password</Label>
              <Input onChange={e => this.setState({
              password: e.target.value
              })} 
            type="text" 
            id="passwordInput" 
            placeholder="New Password" />
            </FormGroup>
            <Row>
              <Col>
              <Button color="success" type="submit">Save changes</Button>
              <br></br>
              <br></br>
              <Button color="danger" type="">Delete account</Button>
              </Col>
            </Row>
          </Form>
        </Col>

        </Row> : null
        }
      </Container>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

function mapDispatchToProps(dispatch) {
  return {
    updateUser: bindActionCreators(updateUser, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard)
