import React, { Component } from "react";
import { Col, Form, FormGroup, Label, Input, Container, Row } from "reactstrap";

class UpdateAcctInfoForm extends Component {
  state = {};

  render() {
    return;
    <Container>
      <Row>
        <Col>
          <Form>
            <FormGroup>
              <div>UpdateAcctInfoForm component</div>;
              <Label>First Name</Label>
              <Input
                onChange={e => (this.state.firstname = e.target.value)}
                type="text"
                id="firstNameInput"
                placeholder="First Name"
              />
              <br />
              <Label>Last Name</Label>
              <Input
                onChange={e => (this.setState.lastname = e.target.value)}
                type="text"
                id="lastNameInput"
                placeholder="Last Name"
              />
              <br />
              <Label>E-Mail</Label>
              <Input
                onChange={e => (this.setState.email = e.target.value)}
                type="text"
                id="emailInput"
                placeholder="E-mail address"
              />
              <br />
              <Label>Password</Label>
              <Input
                onChange={e => (this.setState.password = e.target.value)}
                type="text"
                id="passwordInput"
                placeholder="Password"
              />
              <br />
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>;
  }
}

export default UpdateAcctInfoForm;
