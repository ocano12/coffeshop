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
import {
  addItemToQue,
  setWorking,
  setCountdown,
} from '../../store/coffee-counter/coffee-counter.actions';
import {
  selectQue,
  selectIsWorking,
  selectCountdown,
} from '../../store/coffee-counter/coffee-counter';

const style = StyleSheet.create({
  bottom: {
    paddingBottom: 8,
  },
  headerFont: {
    fontSize: 24,
  },
  container: {
    padding: 8,
  },
  section: {
    paddingTop: 16,
  },
});

const CounterScreen = ({
  que,
  addItemToQue,
  isWorking,
  setWorking,
  setCountdown,
}) => {
  useEffect(() => {
    if (que.length) {
      if (!isWorking) {
        // setWorking(true);
        const item = que[0];
        setCountdown(item.duration);
        //grab first item of the que and dispatch countdown and dispatch is working
      } else {
        //keep checking if its done
        console.log('here');
      }
    }
  }, [que]);

  const handlePress = (item) => {
    addItemToQue(item);
  };

  const renderItem = ({ item }) => {
    return (
      <View key={item.id}>
        <Pressable onPress={() => handlePress(item)}>
          <Text>{item.name}</Text>
        </Pressable>
      </View>
    );
  };

  const BuildQue = ({ que }) => {
    return que.map((item, index) => {
      return (
        <View key={index}>
          <Text>{item.name}</Text>
        </View>
      );
    });
  };

  return (
    <SafeAreaView>
      <View style={style.container}>
        <View style={style.section}>
          <View style={style.bottom}>
            <Text style={style.headerFont}>Menu</Text>
          </View>
          <View>
            <FlatList
              data={items}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View style={style.section}>
            <View style={style.bottom}>
              <Text style={style.headerFont}>Que</Text>
            </View>
            <View>
              <BuildQue que={que} />
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
  };
};

const mapDispatchToProps = (dispatch) => ({
  addItemToQue(item) {
    return dispatch(addItemToQue(item));
  },
  setWorking(flag) {
    return dispatch(setWorking(flag));
  },
  setCountdown(time) {
    return dispatch(setCountdown(time));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterScreen);
