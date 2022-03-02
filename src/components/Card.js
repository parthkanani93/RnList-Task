import React from 'react';
import {StyleSheet, View} from 'react-native';
import LText from './common/LText';

const Card = ({item}) => {
  return (
    <View style={styles.mainContainer}>
      <LText title={`Name :- ${item.name}`} />
      {item.trips && <LText title={`Trips :- ${item.trips}`} />}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'lightblue',
    marginVertical: 10,
    padding: 10,
  },
});

export default React.memo(Card);
