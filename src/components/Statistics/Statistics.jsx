import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Statistics extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
  };
  render() {
    const { state } = this.props;

    return (
      <div>
        <h2>Statistics</h2>
        <ul>
          {Object.entries(state).map(([key, value]) => {
            return (
              <li key={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
              </li>
            );
          })}
          <li>Total: {this.props.total}</li>
          <li>Positive feetback: {this.props.percentage}%</li>
        </ul>
      </div>
    );
  }
}
export default Statistics;
