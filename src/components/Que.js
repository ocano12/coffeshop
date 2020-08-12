import React from 'react';
import { View, Text } from 'react-native';

const Que = ({ que }) => {
  return que.map((item, index) => {
    return (
      <View key={index}>
        <Text>{item.name}</Text>
      </View>
    );
  });
};

export default Que;
