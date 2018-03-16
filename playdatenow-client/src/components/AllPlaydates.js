import React from 'react'
import { Table, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import { deletePlaydate} from '../redux/actions/playdates'

const AllPlaydates = ({playdates, deletePlaydate}) => {
  console.log("pds in MYPLAYDATES", playdates);


  let mappedPlaydates = playdates.map(playdate => {
    return (
      <tr key={playdate.id}>
        <td>{playdate.place}</td>
        <td>{playdate.address}</td>
        <td>{playdate.date}</td>
        <td>{playdate.activity}</td>
        <td>{playdate.notes}</td>
        <td><Button onClick={() => deletePlaydate(playdate.id)}>X</Button></td>
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

const mapStateToProps = state => {
  console.log('state in ap', state)
  return ({
    playdates: state.playdates
  })
}

const mapDispatchToProps = dispatch => bindActionCreators({
  deletePlaydate
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AllPlaydates)

// export default AllPlaydates