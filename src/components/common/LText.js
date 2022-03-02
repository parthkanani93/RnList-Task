import React from 'react';
import {StyleSheet, Text} from 'react-native';

const LText = ({title, style, ...props}) => {
  return (
    <>
      <Text style={[styles.textStyle, style]} {...props}>
        {title}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
});

export default React.memo(LText);
