import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const LTextInput = ({value, style, ...props}) => {
  return (
    <>
      <TextInput
        style={[styles.textInputStyle, style]}
        value={value}
        {...props}
      />
    </>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width: '55%',
  },
});

export default React.memo(LTextInput);
