import React, { Component, PropTypes } from 'react';
import { Table } from 'react-bootstrap';

class TripList extends Component {
  render() {
    return (
        <Table>
          <thead>
            <tr>
              <th>Destination</th>
              <th>Days Spent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hong Kong</td>
              <td><input type="number" min="1" max="30" step="1" value ="3" /></td>
            </tr>
          </tbody>
        </Table>
        );
  }
};

export default TripList;
