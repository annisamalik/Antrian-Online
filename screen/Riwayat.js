import React, {Component} from 'react';
import {
  Container,
  Content,
  Text,
  Right,
  Body,
  List,
  ListItem,
  Left,
  Thumbnail,
  Header,
  Button,
  Icon,
  Title,
} from 'native-base';

export default function Riwayat({route, navigation}) {
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
          <ListItem thumbnail>
            <Left>
              <Thumbnail source={require('../assets/user.png')} />
            </Left>
            <Body>
              <Text>Drg. Siapa</Text>
              <Text note>Poli Gigi</Text>
            </Body>
            <Right>
              <Text note style={{fontSize: 12}}>
                Kamis
              </Text>
              <Text note style={{fontSize: 12}}>
                23-09-2020
              </Text>
              <Text note style={{fontSize: 12}}>
                3:43 pm
              </Text>
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
}
