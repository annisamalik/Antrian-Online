import React, {Component} from 'react';
import {
  Container,
  Content,
  Item,
  Input,
  View,
  Button,
  Text,
  H1,
  Form,
  Thumbnail,
  Icon,
  H2,
} from 'native-base';
import ButtonGrad from '../component/ButtonGrad';

export default class Register extends Component {
  render() {
    return (
      <Container>
        <Content style={{padding: 20}}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Thumbnail square large source={require('../assets/logo.png')} />
            <Text style={{marginTop: 20}}>Sistem Antrian Online</Text>
            <H2>Rumah Sakit Umum</H2>
            <Text note>Kota Bogor</Text>
          </View>

          <Form>
            <Item style={{marginTop: 50}}>
              <Icon
                active
                name="id-card-o"
                type="FontAwesome"
                style={{color: '#066A19', fontSize: 16}}
              />
              <Input style={{fontSize: 14}} placeholder="NIK"></Input>
            </Item>
            <Item style={{marginTop: 15}}>
              <Icon
                active
                name="user-circle-o"
                type="FontAwesome"
                style={{color: '#066A19', fontSize: 16}}
              />
              <Input style={{fontSize: 14}} placeholder="Nama" />
            </Item>

            <Item style={{marginTop: 15}}>
              <Icon
                active
                name="email"
                type="Fontisto"
                style={{color: '#066A19', fontSize: 16}}
              />
              <Input style={{fontSize: 14}} placeholder="E-mail" />
            </Item>
            <Item style={{marginTop: 15}}>
              <Icon
                active
                name="locked"
                type="Fontisto"
                style={{color: '#066A19', fontSize: 16}}
              />
              <Input style={{fontSize: 14}} placeholder="Password" />
            </Item>
          </Form>
          <ButtonGrad teks="Register" />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: 30,
              marginBottom: 70,
            }}>
            <Text style={{fontSize: 14}}>Anda sudah memiliki akun? </Text>
            <Text
              style={{fontSize: 14, color: '#066A19'}}
              onPress={() => this.props.navigation.navigate('Login')}>
              Login
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}
