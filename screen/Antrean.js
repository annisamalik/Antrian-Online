import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  List,
  ListItem,
  Left,
  Body,
  Right,
  View,
} from 'native-base';

import HeaderNav from '../component/Header';
import SlotAntrean from '../component/SlotAntrean';

export default function Antrean({navigation}) {
  return (
    <Container>
      <HeaderNav navigation={navigation} />
      <Content style={{padding: 5}}>
        <SlotAntrean
          data={{
            poli: 'Penyakit Dalam',
            dokter: 'dr. Tina Waluyo',
            jadwal: 'Kamis, 10:00 - 13:00',
          }}
        />
        <SlotAntrean
          data={{
            poli: 'Penyakit Gii',
            dokter: 'dr. Yuna',
            jadwal: 'Kamis, ',
          }}
        />
      </Content>
    </Container>
  );
}
