import React from 'react'
import { Table } from 'reactstrap'
import { connect } from 'react-redux'

const MyPlaydates = ({playdates}) => {
console.log('pds in STATIC PLAYDATES', playdates)

// let myMappedPlaydates = playdates.map(playdate => {
//   return <tr key={playdate.id}>
//       <td>{playdate.place}</td>
//       <td>{playdate.date}</td>
//       <td>{playdate.activity}</td>
//       <td>{playdate.notes}</td>
//       <td>LINK WILL GO HERE</td>
//     </tr>
// });

        return <div>
            <h5>Static Playdates</h5>
            <Table hover>
              <thead>
                <tr>
                  {/* <th>#</th> */}
                  <th>Place</th>
                  <th>Address</th>
                  <th>Date(s)</th>
                  <th>Activity</th>
                  <th>Notes</th>
                  <th>Join?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Zoo</td>
                  <td>14500 W. Northern Ave., Glendale, AZ 85045</td>
                  <td>4/1/2018</td>
                  <td>Zoo day with the kiddos!</td>
                  <td>My kids (ages: 1, 3, & 5) and I will be heading to the zoo for the entire day on my day off. Others are encouraged to join us!</td>
                  <td>LINK WILL GO HERE</td>
                </tr>
              </tbody>
            </Table>
          </div>;
}

// const mapStateToProps = state => ({
//   playdates: state.playdates
// })

// export default connect(mapStateToProps, null)(MyPlaydates)

export default MyPlaydates