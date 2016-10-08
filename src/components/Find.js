import React, { Component, PropTypes } from 'react';
import LaddaButton, { XL, SLIDE_UP } from 'react-ladda';

class Find extends Component {
  constructor(props) {
    super(props);
    this.state = {loading: false};
  }

  toggle() {
    console.log("hi");
    this.setState({
      loading: !this.state.loading,
      progress: 0.5,
    });
    // Submit form
  }

  render() {
    return (
        <LaddaButton
        loading={this.state.loading}
        onClick={this.toggle}
        data-color="#eee"
        data-size={XL}
        data-style={SLIDE_UP}
        data-spinner-size={30}
        data-spinner-color="#ddd"
        data-spinner-lines={12}
        >
        Find Trip
        </LaddaButton>
        );
  }
};

export default Find;
