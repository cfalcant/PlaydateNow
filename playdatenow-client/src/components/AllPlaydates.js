import React from 'react'
import { Table } from 'reactstrap'
import { connect } from 'react-redux'

const AllPlaydates = ({playdates}) => {
  console.log("pds in MYPLAYDATES", playdates);

  let mappedPlaydates = playdates.map(playdate => {
    return (
      <tr key={playdate.id}>
        <td>{playdate.place}</td>
        <td>{playdate.address}</td>
        <td>{playdate.date}</td>
        <td>{playdate.activity}</td>
        <td>{playdate.notes}</td>
        <td>X</td>
      </tr>
    );
  });

  return (
    <div>
      <h5>My Playdates</h5>
      <Table hover>
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Place</th>
            <th>Address</th>
            <th>Date(s)</th>
            <th>Activity</th>
            <th>Notes</th>
            <th>Remove/delete playdate?</th>
          </tr>
        </thead>
        <tbody>{mappedPlaydates}</tbody>
      </Table>
    </div>
  );
};

const mapStateToProps = state => ({
  playdates: state.playdates
})

export default connect(mapStateToProps, null)(AllPlaydates)

// export default AllPlaydates