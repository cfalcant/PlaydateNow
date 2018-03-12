import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

export default class TopNav extends Component {
  render() {
    return (
      <div>
        <p>Top Nav</p>
        <Nav>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
              Disabled Link
            </NavLink>
          </NavItem>
        </Nav>
        <hr />
      </div>
    );
  }
}
