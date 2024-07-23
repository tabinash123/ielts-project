import React from 'react';
import styled from 'styled-components';
import TestCard from '../components/TestCard';

const TestsContainer = styled.div`
  padding: 50px;
`;

const Section = styled.section`
  margin-bottom: 50px;
`;

const SectionTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

const tests = [
  { title: 'Listening Test 1', description: 'Practice listening test.' },
  { title: 'Reading Test 1', description: 'Practice reading test.' },
  { title: 'Writing Test 1', description: 'Practice writing test.' },
];

const PracticeTests = () => (
  <TestsContainer>
    <Section>
      <SectionTitle>Practice Tests</SectionTitle>
      {tests.map((test, index) => (
        <TestCard key={index} title={test.title} description={test.description} />
      ))}
    </Section>
  </TestsContainer>
);

export default PracticeTests;
