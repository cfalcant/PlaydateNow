import React, {Component} from 'react'
import MyPlaydates from './MyPlaydates'
import AllPlaydates from './AllPlaydates'

class Playdates extends Component {
    render () {
        return (
            <div>
            <MyPlaydates />
            <AllPlaydates />
          </div>
        )
    }
} 

export default Playdates