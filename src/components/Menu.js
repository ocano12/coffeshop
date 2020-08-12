import React from 'react';
import { FlatList } from 'react-native';
import MenuItem from './MenuItems';
import { connect } from 'react-redux';
import { addItemToQue } from '../store/coffee-counter/coffee-counter.actions';

const Menu = ({ items, addItemToQue }) => {
  const handlePress = (item) => {
    addItemToQue(item);
  };

  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <MenuItem item={item} onPress={() => handlePress(item)} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToQue(item) {
    return dispatch(addItemToQue(item));
  },
});

export default connect(null, mapDispatchToProps)(Menu);
