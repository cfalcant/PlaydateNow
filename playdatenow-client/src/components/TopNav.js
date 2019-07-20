import React, { Component } from "react";
import { Nav, NavItem, NavLink, Navbar} from "reactstrap";

const navStyle = {
  borderRadius: 10
};
export default class TopNav extends Component {
  render() {
    return <div>
      <h1 className="text-info">PlaydateNOW!</h1>
      <Navbar style={navStyle} color="warning">
        <Nav>
          <NavItem>
            <NavLink className='text-info' href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='text-info' href="/playdates">Playdates</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='text-info' href="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='text-info' href="/faqs">FAQs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='text-info' href="/logout">LogOut</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <hr />
    </div>;
  }
}
