import React from 'react';
import { View } from 'react-native';
import { COLOR_BACKGROUND, COLOR_SECONDARY } from './themes/default';

const PanelSection = (props) => {
  return (
    <View style={[styles.containerStyle, styles[props.align]]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: COLOR_BACKGROUND,
    flexDirection: 'row',
    borderColor: COLOR_SECONDARY,
    position: 'relative'
  },

  alignLeft: {
    justifyContent: 'flex-start'
  },

  alignCenter: {
    justifyContent: 'center'
  },

  alignRight: {
    justifyContent: 'flex-end'
  },

  distribute: {
    justifyContent: 'space-around'
  }
};

export { PanelSection };
