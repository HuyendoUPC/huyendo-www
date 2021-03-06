import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Input, FormControl, Button } from 'react-bootstrap';

class TriplistItem extends Component {
  constructor(props) {
    super();
    this.daysChanged = this.daysChanged.bind(this);
    this.deleteCity = this.deleteCity.bind(this);
  }

  daysChanged() {
    const { editDays, id } = this.props;
    let newDays = ReactDOM.findDOMNode(this.currDays).value;
    editDays(id, newDays);
  }

  deleteCity() {
    const { removeCity, id } = this.props;
    removeCity(id);
  }

  render () {
    const { name } = this.props;
    return (
      <tr>
        <td>{ name }</td>
        <td>
          <FormControl ref={ref => this.currDays = ref} onChange={this.daysChanged} type="number" min="1" max="30" className="trips__numDays" defaultValue="2" />
        </td>
        <td>
          <Button onClick={this.deleteCity} bsStyle="danger" bsSize="small"><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></Button>
        </td>
      </tr>
    );
  } 
}

export default TriplistItem;
