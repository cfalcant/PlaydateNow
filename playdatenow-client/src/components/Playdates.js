import React, {Component} from 'react'
import MyPlaydates from './MyPlaydates'
import AllPlaydates from './AllPlaydates'
import { connect } from 'react-redux'

const Playdates = props => {
    // console.log('mstp in playdates', props.playdates)
        return (
            <div>
            <MyPlaydates playdates={props.playdates}/>
            <AllPlaydates playdates={props.playdates} />
          </div>
        )
    
} 

const mapStateToProps = state => ({
    playdates: state.playdates
})

export default connect(mapStateToProps, null)(Playdates)