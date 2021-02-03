import React, {Component} from 'react';
import {
  Container,
  Content,
  Text,
  Icon,
  Right,
  Button,
  Body,
  List,
  ListItem,
  Left,
  Header,
  Title,
} from 'native-base';

export default function Phone({route, navigation}) {
  return (
    <Container>
      <Header style={{backgroundColor: '#066A19'}}>
        <Left>
          <Button transparent onPress={() => navigation.navigate('Profile')}>
            <Icon name="return-up-back-outline" type="Ionicons" />
          </Button>
        </Left>
        <Body>
          <Title>{route.name}</Title>
        </Body>
      </Header>
      <Content>
        <List>
          <ListItem itemDivider></ListItem>

          <ListItem
            icon
            style={{marginLeft: 0, paddingLeft: 20, borderBottomWidth: 0.5}}>
            <Left>
              <Text style={{fontSize: 14}}>08128064988</Text>
            </Left>
            <Body style={{borderBottomWidth: 0}}></Body>
            <Right style={{borderBottomWidth: 0}}>
              <Text note>Ubah</Text>
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
}
