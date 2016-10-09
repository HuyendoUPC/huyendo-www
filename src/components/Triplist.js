import React, { Component, PropTypes } from 'react';
import { Table, Panel } from 'react-bootstrap';
import _ from 'underscore';

import TriplistItem from './TriplistItem';

class Triplist extends Component {
  render() {
    const { cities, editDays } = this.props;
    if (!_.isEmpty(cities)) {
      return (
          <Panel className="trip-results__panel" header="Trip Stops">
          <Table>
          <thead>
          <tr>
          <th className="trips__destination">Stop</th>
          <th>Days Spent</th>
          </tr>
          </thead>
          <tbody>
          {cities.map((city) => {
             return (
                 <TriplistItem key={city.id} name={city.name} id={city.id} editDays={editDays} />
              );
            })}
          </tbody>
          </Table>
          </Panel>
          );
    } else {
      return (<div/>);
    }
  }
};

export default Triplist;
