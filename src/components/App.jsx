import React, { useState } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import Feedback from './Feedback/Feedback';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['Good', 'Neutral', 'Bad'];

  const onLeaveFeedback = feedback => {
    switch (feedback) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const result = (good / total) * 100;
    return Number(result.toFixed(2));
  };

  const total = countTotalFeedback();

  return (
    <div>
      <Section title="Please leave feedback">
        <Feedback onLeavFeedback={onLeaveFeedback} options={options} />
      </Section>
      {!total ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )}
    </div>
  );
}