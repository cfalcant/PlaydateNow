import React, { Component} from 'react';
import UserDashboard from './UserDashboard';
import AddPlaydateForm from './AddPlaydateForm';

export default class Home extends Component {
  render () {
    return (
      <div> 
        <UserDashboard/>
        <hr/>
        <AddPlaydateForm/>
      </div>
    )
  }
}