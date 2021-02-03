import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  Container,
  Left,
  Body,
  Button,
  Icon,
  Title,
  Text,
  Content,
} from 'native-base';
import HeaderNav from '../component/Header';

export default function Contact({navigation}) {
  return (
    <Container>
      <HeaderNav navigation={navigation} />
      <Content>
        <Text>
          Logo Rumah sakit, info social media, wa, dll, panggilan darurat
        </Text>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
