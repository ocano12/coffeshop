import React from 'react';
import { View, Pressable, Text } from 'react-native';

const MenuItem = ({ item, onPress }) => {
  return (
    <View key={item.id}>
      <Pressable onPress={onPress}>
        <Text>{item.name}</Text>
      </Pressable>
    </View>
  );
};

export default MenuItem;
