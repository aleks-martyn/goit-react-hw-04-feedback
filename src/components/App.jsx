import { useState } from 'react';
import { Section } from './Section';
import { Container } from './App.styled';

export const App = () => {
  const [goodComment, setGoodComment] = useState(0);
  const [neutralComment, setNeutralComment] = useState(0);
  const [badComment, setBadComment] = useState(0);

  const handleGoodCommentChange = event => {
    setGoodComment(prevState => goodComment + 1);
  };
  const handleNeutralCommentChange = event => {
    setNeutralComment(prevState => neutralComment + 1);
  };
  const handleBadCommentChange = event => {
    setBadComment(prevState => badComment + 1);
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <button type="button" onClick={handleGoodCommentChange}>
          Good
        </button>
        <button type="button" onClick={handleNeutralCommentChange}>
          Neutral
        </button>
        <button type="button" onClick={handleBadCommentChange}>
          Bad
        </button>
      </Section>
      <Section title="Statistics">
        <div>
          <p>Good: {goodComment}</p>
          <p>Neutral: {neutralComment}</p>
          <p>Bad: {badComment}</p>
        </div>
      </Section>
    </Container>
  );
};
