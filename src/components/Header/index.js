import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, BasketContainer, ItemCount } from './styles';

export default function Header({ navigation }) {
  return (
    <Container>
      <Logo />
      <BasketContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <ItemCount>0</ItemCount>
      </BasketContainer>
    </Container>
  );
}
