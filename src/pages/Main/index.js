import React, { Component } from 'react';

import { View, ImageBackground } from 'react-native';

import background from '../../assets/background.png';

import Header from '../../components/Header';

// import { Container } from './styles';

export default class Main extends Component {
  static navigationOptions = () => ({
    header: <Header />,
  });

  state = {};

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#191920' }}>
        <ImageBackground
          source={background}
          imageStyle={{ resizeMode: 'cover' }}
          style={{ width: '100%', height: '65%' }}
        />
      </View>
    );
  }
}
