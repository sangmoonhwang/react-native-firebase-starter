import React, {Component} from 'react';
import Home from './pages/Home.page';
import {connect} from 'react-redux';

class Angmotti extends Component {
  render () {
    console.log(this.props.state); // eslint-disable-line
    return (
      <Home />
    );
  }
}

export default connect(null, null)(Angmotti);
