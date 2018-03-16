import React, { Component } from "react";
import { Nav, NavItem, NavLink, Navbar} from "reactstrap";

export default class TopNav extends Component {
  render() {
    return (
      <div>
        <h1 className="text-primary">PlaydateNOW!</h1>
        <Navbar className='bg-dark' color="primary">
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
