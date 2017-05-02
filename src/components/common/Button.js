import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLOR_PRIMARY, COLOR_BUTTON_TEXT } from './themes/default';

const Button = ({ onPress, children, size, icon, rounded }) => {
  const { buttonStyle, textStyle } = styles;
  let iconContainer = null;
  let roundedStyle = null;

  if (icon) {
    iconContainer = <Icon name={icon.name} size={icon.size} color={COLOR_BUTTON_TEXT} />;
  }

  if (rounded) {
    roundedStyle = {
      borderRadius: rounded.radius
    };
  }

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyle, styles[size], roundedStyle]}>
      <Text style={textStyle}>
        {iconContainer} {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: COLOR_BUTTON_TEXT,
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },

  buttonStyle: {
    backgroundColor: COLOR_PRIMARY,
    marginLeft: 5,
    marginRight: 5
  },

  sizeLarge: {
    flex: 1,
    alignSelf: 'stretch'
  },

  sizeMedium: {
    width: 170,
    alignSelf: 'center'
  },

  sizeSmall: {
    width: 100
  }
};

export { Button };
