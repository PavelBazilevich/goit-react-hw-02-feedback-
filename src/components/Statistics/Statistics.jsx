import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Statistics extends Component {
  static propTypes = {
    state: PropTypes.object.isRequired,
    countTotalFeedback: PropTypes.func.isRequired,
    percentage: PropTypes.func.isRequired,
  };
  render() {
    return (
      <div>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {this.props.state.good}</li>
          <li>Neutral: {this.props.state.neutral}</li>
          <li>Bad: {this.props.state.bad}</li>
          <li>Total: {this.props.countTotalFeedback}</li>
          <li>Positive feetback: {this.props.percentage}%</li>
        </ul>
      </div>
    );
  }
}
export default Statistics;
