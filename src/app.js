import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import reducers from './reducers';
import { Header, Heading, Panel, PanelSection, Button } from './components/common';

class App extends Component {

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header
            leftComponent={<Icon name="navicon" size={20} color="#000000" />}
            centerComponent={<Heading>Example Header</Heading>}
            rightComponent={<Icon name="sign-in" size={20} color="#000000" />}
          />
          <Panel>
            <PanelSection align="alignCenter">
              <Button size="sizeSmall" icon={{ name: 'pie-chart', size: 15 }}>
                Example
              </Button>

              <Button size="sizeSmall" rounded={{ radius: 5 }}>
                Example 2
              </Button>

            </PanelSection>
          </Panel>
        </View>
      </Provider>
    );
  }
}

export default App;
