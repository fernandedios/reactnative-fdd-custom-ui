import React from 'react';
import { Text } from 'react-native';
import { COLOR_TEXT } from './themes/default';

const Heading = ({ children, style }) => {
  return (
    <Text style={[styles.textStyle, style]}>
      {children}
    </Text>
  );
};

const styles = {
  textStyle: {
    color: COLOR_TEXT,
    fontSize: 16
  },
};

export { Heading };
