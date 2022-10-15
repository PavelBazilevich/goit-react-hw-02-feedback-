import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  static propTypes = {
    hendleChange: PropTypes.func.isRequired,
  };
  render() {
    return (
      <div className={css.button_box}>
        <button
          type="button"
          name="good"
          onClick={e => this.props.hendleChange(e)}
        >
          Good
        </button>
        <button
          type="button"
          name="neutral"
          onClick={e => this.props.hendleChange(e)}
        >
          Neutral
        </button>
        <button
          type="button"
          name="bad"
          onClick={e => this.props.hendleChange(e)}
        >
          Bad
        </button>
      </div>
    );
  }
}
export default FeedbackOptions;
