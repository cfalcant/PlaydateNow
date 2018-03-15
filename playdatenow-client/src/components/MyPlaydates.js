import React from 'react'
import { Table } from 'reactstrap'
import { connect } from 'react-redux'

const MyPlaydates = ({playdates}) => {
console.log('playdates', playdates)

let myMappedPlaydates = playdates.map(playdate => {
  return (
    <tr key={playdate.id}>
      <td>{playdate.place}</td>
      <td>{playdate.date}</td>
      <td>{playdate.activity}</td>
      <td>{playdate.notes}</td>
      <td>LINK WILL GO HERE</td>
    </tr>
  );
});

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
                  <th>Delete/remove?</th>
                </tr>
              </thead>
              <tbody>{myMappedPlaydates}</tbody>
            </Table>
          </div>;
}

// const mapStateToProps = state => ({
//   playdates: state.playdates
// })

// export default connect(mapStateToProps, null)(MyPlaydates)

export default MyPlaydates