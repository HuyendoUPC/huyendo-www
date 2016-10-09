import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Input, Form, FormGroup, FormControl } from 'react-bootstrap';

class TriplistItem extends Component {
  constructor(props) {
    super();
    this.daysChanged = this.daysChanged.bind(this);
  }

  componentWillMount() {
    const { city } = this.props;
    this.state = { name: city.name, id: city.id }
  }

  daysChanged() {
    const { dispatch, editDays } = this.props;
    const { id } = this.state;
    let newDays = ReactDOM.findDOMNode(this.currDays).value;
    let action = editDays(id, newDays);
    dispatch(action);
  }

  render () {
    const { name } = this.state;
    return (
      <tr>
        <td>{ name }</td>
        <td>
          <FormControl ref={ref => this.currDays = ref} onChange={this.daysChanged} type="number" min="1" max="30" className="trips__numDays" defaultValue="2" />
        </td>
      </tr>
    );
  }
}

export default TriplistItem;
