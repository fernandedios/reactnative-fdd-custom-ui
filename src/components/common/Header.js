import React, { Component } from 'react';
import { View } from 'react-native';
import { COLOR_SECONDARY } from './themes/default';

class Header extends Component {
  render() {
    const {
      leftComponent,
      centerComponent,
      rightComponent
    } = this.props;

    const {
      viewStyle,
      leftStyle,
      centerStyle,
      rightStyle
    } = styles;

    return (
      <View style={[viewStyle]} >
        <View style={leftStyle}>{leftComponent}</View>
        <View style={centerStyle}>{centerComponent}</View>
        <View style={rightStyle}>{rightComponent}</View>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flexDirection: 'row',
    backgroundColor: COLOR_SECONDARY,
    height: 60,
    justifyContent: 'space-between',
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },

  imageStyle: {

  },

  leftStyle: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },

  centerStyle: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },

  rightStyle: {
    flex: 1,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'flex-end'
  }
};

export { Header };
