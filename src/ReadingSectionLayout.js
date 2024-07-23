import React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  margin: 20px;
`;

const PassageContainer = styled.div`
  flex: 3;
  padding-right: 20px;
  border-right: 1px solid #ccc;
`;

const QuestionsContainer = styled.div`
  flex: 2;
  padding-left: 20px;
`;

const ReadingSectionLayout = ({ passage, children }) => (
  <LayoutContainer>
    <PassageContainer>
      {passage.map((para, index) => (
        <p key={index}>{para}</p>
      ))}
    </PassageContainer>
    <QuestionsContainer>
      {children}
    </QuestionsContainer>
  </LayoutContainer>
);

export default ReadingSectionLayout;
