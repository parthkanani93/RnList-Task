import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Animated} from 'react-native';

const AnimationScreen = () => {
  const value = useState(new Animated.Value(0))[0];

  const moveBall = () => {
    Animated.timing(value, {
      toValue: 1000,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={localStyles.mainContainer}>
      <Animated.View
        style={[
          localStyles.ballContainer,
          {
            marginLeft: value,
          },
        ]}></Animated.View>
      <Pressable onPress={moveBall}>
        <Text>Press Me!</Text>
      </Pressable>
    </View>
  );
};

const localStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ballContainer: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
    borderRadius: 50,
  },
});

export default AnimationScreen;
