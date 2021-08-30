import React from 'react';
import styled from 'styled-components/native';
import { withScreen } from '../../utils/wrapper';
import { View, Text } from 'react-native';

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const MainText = styled.Text`
  font-size: 20px;
  text-align: center;
  margin: 10px;
  color: red;
`;

const Home = ({ naviagation }) => {
  return (
    <Container>
      <MainText>
        Hello Application
        <Text>이동하기?</Text>
      </MainText>
    </Container>
  );
};

export default withScreen(Home);
