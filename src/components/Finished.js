import React from 'react';
import { View, Text } from 'react-native';

const Finished = ({ finished }) => {
  return finished.map((item, index) => {
    return (
      <View key={index}>
        <Text>{item.name}</Text>
      </View>
    );
  });
};

export default Finished;
