import React, { Component, PropTypes } from 'react';
import { Table, Panel } from 'react-bootstrap';
import _ from 'underscore';

import TriplistItem from './TriplistItem';

class Triplist extends Component {
  render() {
    const { cities } = this.props;
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
                 <TriplistItem city={city} editDays={editDays} dispatch={dispatch} /> 
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
