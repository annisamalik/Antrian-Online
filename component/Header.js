import React from 'react';
import {Header, Left, Body, Button, Icon, Title} from 'native-base';

import {useRoute} from '@react-navigation/native';

export default function HeaderNav({navigation}) {
  const route = useRoute();
  return (
    <Header style={{backgroundColor: '#066A19'}}>
      <Left>
        <Button transparent onPress={navigation.toggleDrawer}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>{route.name}</Title>
      </Body>
    </Header>
  );
}
