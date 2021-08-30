import React from 'react';
import { View, Text } from 'react-native';
import { withScreen } from '../../utils/wrapper';

const Info = () => {
  return (
    <View>
      <Text>Info Sample</Text>
    </View>
  );
};

export default withScreen(Info);
