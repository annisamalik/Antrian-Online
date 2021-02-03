import React, {Component} from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Right,
  Button,
  Body,
  List,
  ListItem,
  Left,
  Thumbnail,
  Separator,
} from 'native-base';
import HeaderNav from '../component/Header';
import LinearGradient from 'react-native-linear-gradient';

export default function Profile({route, navigation}) {
  const data = [
    {title: 'NIK', value: '1234567891012'},
    {title: 'Name', value: 'Annisa Aisyha Malik'},
    {title: 'Jenis Kelamin', value: 'Atur sekarang'},
    {title: 'Tanggal Lahir', value: 'Atur sekarang'},
  ];
  const list = [
    {
      title: 'No Telepon',
      icon: 'smartphone',
      nav: 'Phone',
    },
    {
      title: 'E-mail',
      icon: 'email',
      nav: 'Masukkan Password',
    },
    {
      title: 'Password',
      icon: 'lock',
      nav: 'Masukkan Password',
    },
  ];
  return (
    <Container>
      <HeaderNav navigation={navigation} />
      <Content>
        <List>
          <Thumbnail
            source={require('../assets/user.png')}
            style={{alignSelf: 'center', margin: 40}}
          />

          <ListItem itemDivider>
            <Text style={{fontSize: 12}}>Informasi Diri</Text>
          </ListItem>

          {data.map((_, i) => (
            <ListItem
              icon
              style={{marginLeft: 0, paddingLeft: 20, borderBottomWidth: 0.5}}>
              <Left>
                <Text style={{fontSize: 14}}>{data[i].title}</Text>
              </Left>
              <Body style={{borderBottomWidth: 0}}></Body>
              <Right style={{borderBottomWidth: 0}}>
                <Text note>{data[i].value}</Text>
              </Right>
            </ListItem>
          ))}

          <ListItem itemDivider>
            <Text style={{fontSize: 12}}>Informasi Kontak</Text>
          </ListItem>

          {list.map((_, i) => (
            <ListItem
              icon
              style={{
                borderBottomWidth: 0.5,
                marginLeft: 0,
                paddingLeft: 20,
              }}>
              <Left>
                <Icon
                  active
                  name={list[i].icon}
                  type="MaterialIcons"
                  style={{color: '#066A19'}}
                />
              </Left>
              <Body style={{borderBottomWidth: 0}}>
                <Text style={{fontSize: 14}}>{list[i].title}</Text>
              </Body>
              <Right style={{borderBottomWidth: 0}}>
                <Text note>Data</Text>
                <Icon
                  active
                  name="arrow-forward"
                  onPress={() => navigation.navigate(`${list[i].nav}`)}
                />
              </Right>
            </ListItem>
          ))}
          <ListItem itemDivider></ListItem>

          <ListItem
            icon
            style={{
              borderBottomWidth: 0.5,
              marginLeft: 0,
              paddingLeft: 20,
            }}>
            <Left>
              <Icon
                active
                name="history"
                type="FontAwesome"
                style={{color: '#066A19'}}
              />
            </Left>
            <Body style={{borderBottomWidth: 0}}>
              <Text style={{fontSize: 14}}>Riwayat Berobat</Text>
            </Body>

            <Right style={{borderBottomWidth: 0}}>
              <Icon
                active
                name="arrow-forward"
                onPress={() => navigation.navigate('Riwayat Berobat')}
              />
            </Right>
          </ListItem>
        </List>
        <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.95, y: 1.0}}
          colors={['#066A19', '#30F053']}
          style={{
            marginTop: 30,
            marginBottom: 20,
            width: '90%',
            alignSelf: 'center',
            flex: 1,
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 15,
          }}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              margin: 10,
              textTransform: 'uppercase',
            }}>
            Logout
          </Text>
        </LinearGradient>
      </Content>
    </Container>
  );
}
