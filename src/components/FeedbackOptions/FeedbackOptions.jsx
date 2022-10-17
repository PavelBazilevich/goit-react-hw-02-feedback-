import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  static propTypes = {
    hendleChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
  render() {
    const { options } = this.props;
    return (
      <div className={css.button_box}>
        {options.map(option => (
          <button
            key={option}
            type="button"
            name={option}
            onClick={() => this.props.hendleChange(option)}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>
    );
  }
}
export default FeedbackOptions;
