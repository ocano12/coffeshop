import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { selectQue } from '../store/coffee-counter/coffee-counter';

const Que = ({ que }) => {
  return que.map((item, index) => {
    return (
      <View key={index}>
        <Text>{item.name}</Text>
      </View>
    );
  });
};

const mapStateToProps = (state) => {
  return {
    que: selectQue(state),
  };
};

export default connect(mapStateToProps)(Que);
