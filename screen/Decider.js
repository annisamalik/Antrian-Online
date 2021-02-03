import React from 'react';
import {View} from 'react-native';
import {AsyncStorage} from '@react-native-community/async-storage';
import Welcome from './Welcome';
import DrawerNavigator from './DrawerNavigator';

export default class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    var alreadyLaunchedPage = await AsyncStorage.getItem('alreadyLaunchedPage');
    if (alreadyLaunchedPage) {
      this.props.navigation.navigate(alreadyLaunchedPage);
    } else {
      this.props.navigation.navigate(DrawerNavigator);
    }
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Welcome />
      </View>
    );
  }
}
