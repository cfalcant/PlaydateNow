import React, { Component } from "react";
import { Nav, NavItem, NavLink, Navbar} from "reactstrap";

export default class TopNav extends Component {
  render() {
    return (
      <div>
        <p>PlaydateNOW!</p>
        <Navbar>
        <Nav>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/playdates">Playdates</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="">
              LogOut
            </NavLink>
          </NavItem>
        </Nav>
        </Navbar>
        <hr />
      </div>
    );
  }
}
