import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

export default class Root extends Component {
  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
        <h1>Leviathan</h1>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};
