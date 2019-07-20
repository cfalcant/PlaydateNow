import React, {Component} from 'react'
import MyPlaydates from './MyPlaydates'
import AllPlaydates from './AllPlaydates'
import { connect } from 'react-redux'

const Playdates = props => {
    // console.log('mstp in playdates', props.playdates)
  return (
    <div>    
      <MyPlaydates playdates={props.myPlaydates}/>
      <AllPlaydates playdates={props.playdates} />
    </div>
  )  
} 

const mapStateToProps = state => {
  console.log('state in playdates', state)
  return {
    playdates: state.playdates,
    myPlaydates: state.users.myPlaydates
  }
}

export default connect(mapStateToProps, null)(Playdates)

