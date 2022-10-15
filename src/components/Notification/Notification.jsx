import React, { Component } from 'react';
import css from 'components/Notification/Notification.module.css';
import PropTypes from 'prop-types';

class Notification extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };
  render() {
    return (
      <div>
        <p>{this.props.message}</p>
        <div className={css.rotate_shadows}></div>
      </div>
    );
  }
}
export default Notification;
