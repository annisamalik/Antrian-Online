import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Thumbnail, Text, View} from 'native-base';

import LinearGradient from 'react-native-linear-gradient';
const gradientColour = (closed) =>
  closed ? ['#AE1C09', '#F03030'] : ['#099A24', '#30F053'];
const textColour = (closed) => (closed ? 'red' : '#099A24');
export default function SlotAntrean({data}) {
  const closed = true;

  return (
    <LinearGradient
      start={{x: 0.25, y: 1.0}}
      end={{x: 0.95, y: 0.0}}
      colors={gradientColour(closed)}
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'center',
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
            color: textColour(closed),
            backgroundColor: 'white',
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 50,
            fontSize: 14,
            marginBottom: 5,
          }}>
          {data.poli}
        </Text>
        <Text style={{color: 'white', fontWeight: 'bold'}}>{data.dokter}</Text>
        <Text note style={{color: '#F7FFF7'}}>
          {data.jadwal}
        </Text>
      </View>
      <View style={{right: 10, position: 'absolute'}}>
        <Text note style={{alignSelf: 'center', color: 'white'}}>
          Antrian
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          30/50
        </Text>
        {closed && (
          <Text
            style={{
              fontSize: 12,
              color: '#AE1C09',
              backgroundColor: '#FAB3B3',
              fontWeight: 'bold',
              borderRadius: 5,
              alignSelf: 'center',
              paddingHorizontal: 10,
              textTransform: 'uppercase',
            }}>
            Closed
          </Text>
        )}
      </View>
    </LinearGradient>
  );
}
