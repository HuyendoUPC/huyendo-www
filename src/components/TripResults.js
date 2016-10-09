import React, { Component } from 'react';
import { Table, Panel } from 'react-bootstrap';
import _ from 'underscore';

class TripResults extends Component {
  render () {
    const { trip } = this.props;
    if (!_.isEmpty(trip) && trip !== "Impossible to get route") {
      let trips = trip.trips;
      return (
          <div>
          {trips.map((trip, i) => {
            let title = `Alternative ${i + 1}: £${trip.price}`;
            return (
              <Panel className="trip-results__panel" header={ title }>
                   <Table>
                     <thead>
                     <tr>
                     <th>Date</th>
                     <th>From</th>
                     <th>To</th>
                     <th>Carrier</th>
                     <th>Price</th>
                     </tr>
                     </thead>
                     <tbody>
                     {trip.route.map((flight) => {
                        let date = flight.arr_date.substring(0,10);
                       return (
                           <tr>
                            <td>{date}</td>
                            <td>{flight.from}</td>
                            <td>{flight.to}</td>
                            <td>{flight.carrier}</td>
                            <td>£{flight.price}</td>
                           </tr>
                               );
                           })}
                     </tbody>
                       </Table>
              </Panel>
                );
          })}
          </div>
      );
    } else {
      return (<div />);
    }
  }
}

export default TripResults;
