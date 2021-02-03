import React, {Component} from 'react';
import {
  Container,
  Content,
  Text,
  Icon,
  Button,
  Body,
  Left,
  Header,
  Title,
  Form,
  Item,
  Input,
} from 'native-base';

export default function UbahEmail({route, navigation}) {
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
      <Content style={{padding: 25}}>
        <Form>
          <Item style={{marginTop: 15}}>
            <Input style={{fontSize: 16}} placeholder="isanart.am@Gmail.com" />
          </Item>
        </Form>
        <Button
          style={{
            marginTop: 15,
            marginBottom: 15,
            alignSelf: 'center',
            width: '100%',
            justifyContent: 'center',
            backgroundColor: '#066A19',
            borderRadius: 10,
          }}>
          <Text>Selesai</Text>
        </Button>
      </Content>
    </Container>
  );
}
