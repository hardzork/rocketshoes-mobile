import React, { Component } from 'react';

import { View, ImageBackground } from 'react-native';
import background from '../../assets/background.png';

// import { Container } from './styles';

export default class Cart extends Component {
  static navigationOptions = () => ({
    title: 'Shopping Cart',
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
