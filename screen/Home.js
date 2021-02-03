import {
  Container,
  Left,
  Body,
  Button,
  Icon,
  Title,
  Text,
  Content,
  Card,
  CardItem,
  H1,
  Right,
  View,
  Thumbnail,
} from 'native-base';
import HeaderNav from '../component/Header';

import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Home({navigation}) {
  const sedangAntri = true;
  return (
    <>
      <Container>
        <HeaderNav navigation={navigation} />

        <Content style={{padding: 10}}>
          <Card style={{borderRadius: 10}}>
            <CardItem>
              <Body>
                <H1>Selamat Datang,</H1>
                <Text>Annisa Malik!</Text>

                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                  }}>
                  <Text style={{fontSize: 50}}>13:00</Text>
                  <Text style={{paddingBottom: 10, marginLeft: 10}}>
                    Ahad, 20 Januari
                  </Text>
                </View>
              </Body>
            </CardItem>
          </Card>

          {sedangAntri ? (
            <Card>
              <CardItem>
                <Body>
                  <LinearGradient
                    start={{x: 0.25, y: 1.0}}
                    end={{x: 0.95, y: 0.0}}
                    colors={['#099A24', '#30F053']}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      width: '100%',
                      alignSelf: 'center',
                      flex: 1,
                      padding: 10,
                      paddingRight: 15,
                      borderRadius: 10,
                      marginBottom: 15,
                      alignItems: 'center',
                    }}>
                    <Thumbnail
                      source={require('../assets/dokter.png')}
                      style={{backgroundColor: 'white'}}
                    />
                    <View style={{marginLeft: 20}}>
                      <Text
                        style={{
                          color: '#099A24',
                          backgroundColor: 'white',
                          paddingLeft: 10,
                          paddingRight: 10,
                          borderRadius: 50,
                          fontSize: 14,
                          marginBottom: 5,
                        }}>
                        Poli Penyakit Dalam
                      </Text>
                      <Text style={{color: 'white', fontWeight: 'bold'}}>
                        dr. Tina Waluyo
                      </Text>
                      <Text note style={{color: '#F7FFF7'}}>
                        Kamis, 10:00 - 13:00{' '}
                      </Text>
                    </View>
                  </LinearGradient>
                  <Text style={{alignSelf: 'center'}}>Nomor Antrian anda</Text>
                  <Text style={{fontSize: 60, alignSelf: 'center'}}>45</Text>
                  <Text note style={{alignSelf: 'center'}}>
                    No Antrian Saat Ini : 23
                  </Text>
                </Body>
              </CardItem>
            </Card>
          ) : (
            <>
              <Text
                style={{
                  alignSelf: 'center',
                  marginTop: 50,
                }}>
                Anda tidak sedang dalam antrian.
              </Text>
              <Button
                rounded
                onPress={() => navigation.navigate('Jadwal')}
                style={{
                  alignSelf: 'center',
                  marginTop: 50,
                  backgroundColor: '#066A19',
                }}>
                <Text>Daftar</Text>
              </Button>
            </>
          )}
        </Content>
      </Container>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
