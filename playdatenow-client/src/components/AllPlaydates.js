import React from 'react'
import { Table } from 'reactstrap'
import { Link} from 'react-router-dom'

const AllPlaydates = ({playdates}) => {
    // console.log('playdates', playdates)
    
let mappedPlaydates = playdates.map(playdate => {
    return <tr key={playdate.id}>
          <td>{playdate.place}</td>
          <td>{playdate.address}</td>
          <td>{playdate.date}</td>
          <td>{playdate.activity}</td>
          <td>{playdate.notes}</td>
          <td>{playdate.playdate_creator}</td>
          <td>
            {/* <Link href="/playdate/:id" /> */}
          </td>
        </tr>
      ;
})

    return <div>
        <h5>All Playdates</h5>
        <Table hover>
          <thead>
            <tr>
              {/* <th>#</th> */}
              <th>Place</th>
              <th>Address</th>
              <th>Date(s)</th>
              <th>Activity</th>
              <th>Notes</th>
              <th>Playdate Creator</th>
              <th>Join playdate?</th>
            </tr>
          </thead>
          <tbody>{mappedPlaydates}</tbody>
        </Table>
      </div>;
}

export default AllPlaydates