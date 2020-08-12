import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  StyleSheet,
  FlatList,
} from 'react-native';
import { items } from '../../data/items';
import Menu from '../../components/Menu';
import Que from '../../components/Que';
import {
  setWorking,
  setCountdown,
} from '../../store/coffee-counter/coffee-counter.actions';
import {
  selectQue,
  selectIsWorking,
  selectCountdown,
} from '../../store/coffee-counter/coffee-counter';

import counterScreenStyles from './counterScreen.styles';

const CounterScreen = ({
  que,
  addItemToQue,
  isWorking,
  setWorking,
  setCountdown,
  countdown,
}) => {
  useEffect(() => {
    if (que.length) {
      if (!isWorking) {
        setWorking(true);
        const item = que[0];
        setCountdown(item.duration);
        //grab first item of the que and dispatch countdown and dispatch is working
      } else {
        if (countdown === 0) {
          //dispatch finsihed
          setWorking(false);
        }
      }
    }
  }, [que, countdown]);

  return (
    <SafeAreaView>
      <View style={counterScreenStyles.container}>
        <View style={counterScreenStyles.section}>
          <View style={counterScreenStyles.bottom}>
            <Text style={counterScreenStyles.headerFont}>Menu</Text>
          </View>
          <View>
            <Menu items={items} />
          </View>
          <View style={counterScreenStyles.section}>
            <View style={counterScreenStyles.bottom}>
              <Text style={counterScreenStyles.headerFont}>Que</Text>
            </View>
            <View>
              <Que que={que} />
            </View>
          </View>
          <View style={counterScreenStyles.section}>
            <View style={counterScreenStyles.bottom}>
              <Text style={counterScreenStyles.headerFont}>Finished</Text>
            </View>
            <View></View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    que: selectQue(state),
    isWorking: selectIsWorking(state),
    countdown: selectCountdown(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  setWorking(flag) {
    return dispatch(setWorking(flag));
  },
  setCountdown(time) {
    return dispatch(setCountdown(time));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterScreen);
