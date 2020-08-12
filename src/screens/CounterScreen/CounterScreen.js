import React, { useEffect, useState } from 'react';

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
import Finished from '../../components/Finished';
import {
  setWorking,
  setCountdown,
  setFinished,
} from '../../store/coffee-counter/coffee-counter.actions';
import {
  selectQue,
  selectIsWorking,
  selectCountdown,
  selectFinished,
} from '../../store/coffee-counter/coffee-counter';

import counterScreenStyles from './counterScreen.styles';

const CounterScreen = ({
  que,
  addItemToQue,
  isWorking,
  setWorking,
  setCountdown,
  countdown,
  setFinished,
  finished,
}) => {
  useEffect(() => {
    let timer;
    let item;
    if (que.length) {
      if (!isWorking) {
        setWorking(true);
        item = que[0];
        setCountdown(item.duration);
      } else {
        timer = setInterval(() => {
          const newCountdown = countdown - 1;
          console.log(countdown);
          if (newCountdown >= 0) {
            setCountdown(newCountdown);
          } else {
            clearInterval(timer);
            setWorking(false);
            setFinished(que[0]);
          }
        }, 1000);
      }
    }
    return () => clearInterval(timer);
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
            <View>
              <Finished finished={finished} />
            </View>
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
    finished: selectFinished(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  setWorking(flag) {
    return dispatch(setWorking(flag));
  },
  setCountdown(time) {
    return dispatch(setCountdown(time));
  },
  setFinished(item) {
    return dispatch(setFinished(item));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterScreen);
