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

  hendleChange = event => {
    this.setState(prevState => {
      if (event.target.name === 'good') {
        return { good: prevState.good + 1 };
      } else if (event.target.name === 'neutral') {
        return { neutral: prevState.neutral + 1 };
      } else if (event.target.name === 'bad') {
        return { bad: prevState.bad + 1 };
      }
    });
  };

  countTotalFeedback = () => {
    const valuesArr = Object.values(this.state);
    return valuesArr.reduce((acc, val) => {
      acc += val;
      return acc;
    });
  };

  countPositiveFeedbackPercentage = () => {
    return Math.trunc((this.state.good / this.countTotalFeedback()) * 100);
  };

  availabilityOfStatistics = () => {
    if (
      this.state.good === 0 &&
      this.state.neutral === 0 &&
      this.state.bad === 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return (
      <div className={css.section}>
        <Section />
        <FeedbackOptions hendleChange={this.hendleChange} />

        {!this.availabilityOfStatistics() ? (
          <Statistics
            state={this.state}
            countTotalFeedback={this.countTotalFeedback()}
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
