import React, {Component} from 'react';
import {
  Container,
  Content,
  Item,
  Input,
  Button,
  Text,
  Icon,
  Form,
  View,
  Thumbnail,
  H2,
} from 'native-base';
import {Dimensions, Image} from 'react-native';
import ButtonGrad from '../component/ButtonGrad';

export default class Login extends Component {
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
            <Item style={{marginTop: 40}}>
              <Icon
                active
                name="email"
                type="Fontisto"
                style={{color: '#066A19', fontSize: 16}}
              />
              <Input style={{fontSize: 14}} placeholder="Alamat Email"></Input>
            </Item>
            <Item style={{marginTop: 15}}>
              <Icon
                active
                name="locked"
                type="Fontisto"
                style={{color: '#066A19', fontSize: 16}}
              />
              <Input style={{fontSize: 14}} placeholder="Password" />
              <Icon
                active
                name="eye"
                type="Entypo"
                style={{color: '#066A19', fontSize: 16}}
              />
            </Item>
          </Form>
          <ButtonGrad teks="Login" />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignSelf: 'center',
              marginTop: 30,
            }}>
            <Text style={{fontSize: 14}}>Anda belum memiliki akun? </Text>
            <Text
              style={{fontSize: 14, color: '#066A19'}}
              onPress={() => this.props.navigation.navigate('Register')}>
              Register
            </Text>
          </View>
        </Content>
      </Container>
    );
  }
}
