import React, {Component} from 'react';
import {
  Container,
  Content,
  Text,
  Icon,
  Right,
  Button,
  Body,
  Left,
  Header,
  Title,
  Form,
  Item,
  Input,
} from 'native-base';

export default function InputPassword({route, navigation}) {
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
        <Text style={{fontSize: 14}}>
          Untuk mengamankan akunmu, silakan verifikasi identitas dengan
          memasukkan password.
        </Text>
        <Form>
          <Item style={{marginTop: 15}}>
            <Icon
              active
              name="locked"
              type="Fontisto"
              style={{color: '#066A19', fontSize: 16}}
            />
            <Input style={{fontSize: 16}} placeholder="Password saat ini" />
          </Item>
        </Form>
        <Button
          onPress={() => navigation.navigate('Ganti Password')}
          style={{
            marginTop: 15,
            marginBottom: 15,
            alignSelf: 'center',
            width: '100%',
            justifyContent: 'center',
            backgroundColor: '#066A19',
            borderRadius: 10,
          }}>
          <Text>Lanjut</Text>
        </Button>
        <Text style={{alignSelf: 'center', fontSize: 14}}>Lupa password?</Text>
      </Content>
    </Container>
  );
}
