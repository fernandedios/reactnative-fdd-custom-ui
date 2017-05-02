import React from 'react';
import { View } from 'react-native';

const Panel = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export { Panel };
