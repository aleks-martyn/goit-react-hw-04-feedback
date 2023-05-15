import { useState } from 'react';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { Container } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = event => {
    setGood(prevState => prevState + 1);
  };
  const handleNeutralClick = event => {
    setNeutral(prevState => prevState + 1);
  };
  const handleBadClick = event => {
    setBad(prevState => prevState + 1);
  };

  const handleLeaveFeedback = label => {
    switch (label) {
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

  const options = Object.keys({ good, neutral, bad })
  console.log(options);

  return (
    <Container>
      <Section title="Please leave feedback">
        <button type="button" onClick={handleGoodClick}>
          Good
        </button>
        <button type="button" onClick={handleNeutralClick}>
          Neutral
        </button>
        <button type="button" onClick={handleBadClick}>
          Bad
        </button>
      </Section>
      <Section title="Statistics">
        <Statistics good={good} neutral={neutral} bad={bad} />
      </Section>
    </Container>
  );
};
