import React, { Component, PropTypes } from 'react';
import { Table, Panel } from 'react-bootstrap';
import _ from 'underscore';

class TripList extends Component {
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
                  <tr>
                  <td>{ city.name }</td>
                  <td><input type="number" min="1" max="30" step="1" className="trips__numDays"/></td>
                  </tr>
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

export default TripList;
