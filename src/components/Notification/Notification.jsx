import React, { Component } from 'react';
import css from 'components/Notification/Notification.module.css';

class Notification extends Component {
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
