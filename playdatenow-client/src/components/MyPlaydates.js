import React from 'react'
import { Table } from 'reactstrap'

const MyPlaydates = ({playdates}) => {

    return <div>
        <h5>My Playdates</h5>
        <Table hover>
          <thead>
            <tr>
              {/* <th>#</th> */}
              <th>Place</th>
              <th>Date(s)</th>
              <th>Activity</th>
              <th>Notes</th>
              <th>Delete/Remove?</th>
            </tr>
          </thead>
          {/* {mappedPlaydates} */}
        </Table>
      </div>;
}

export default MyPlaydates