import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import LText from './LText';

const LButton = ({btnText, btnTextStyle, customStyle, onPress, ...props}) => {
  return (
    <>
      <Pressable
        style={[styles.btnStyle, customStyle]}
        onPress={onPress}
        {...props}>
        <LText title={btnText} style={btnTextStyle} />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: 'gray',
    width: 120,
    padding: 10,
    margin: 20,
    justifyContent: 'center',
  },
});

export default React.memo(LButton);
