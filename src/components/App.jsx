import React, { Component } from 'react';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import css from 'components/Section/Section.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendleChange = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  total = () => {
    const valuesArr = Object.values(this.state);
    return valuesArr.reduce((acc, val) => {
      acc += val;
      return acc;
    });
  };

  countPositiveFeedbackPercentage = () => {
    return Math.trunc((this.state.good / this.total()) * 100);
  };

  render() {
    const total = this.total();
    return (
      <div className={css.section}>
        <Section />
        <FeedbackOptions
          hendleChange={this.hendleChange}
          options={Object.keys(this.state)}
        />

        {total ? (
          <Statistics
            state={this.state}
            total={total}
            percentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </div>
    );
  }
}

export default App;
