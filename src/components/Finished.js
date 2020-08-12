import React from 'react';
import { connect } from 'react-redux';
import { selectFinished } from '../store/coffee-counter/coffee-counter';
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

const mapStateToProps = (state) => {
  return {
    finished: selectFinished(state),
  };
};

export default connect(mapStateToProps)(Finished);
