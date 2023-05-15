import { useState } from 'react';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { Container } from './App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = event => {
    setGood(prevState => good + 1);
  };
  const handleNeutralClick = event => {
    setNeutral(prevState => neutral + 1);
  };
  const handleBadClick = event => {
    setBad(prevState => bad + 1);
  };

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
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
        />
      </Section>
    </Container>
  );
};
