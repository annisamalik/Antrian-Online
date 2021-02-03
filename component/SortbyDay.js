import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Thumbnail, Text, View, Accordion, Icon} from 'native-base';

import LinearGradient from 'react-native-linear-gradient';
const gradientColour = (closed) =>
  closed ? ['#AE1C09', '#F03030'] : ['#099A24', '#30F053'];
const textColour = (closed) => (closed ? 'red' : '#099A24');

const dataArray = [
  {title: 'Nama Poli', content: 'Jadwal Dokter hari dan button'},
  {title: 'Second Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Third Element', content: 'Lorem ipsum dolor sit amet'},
];

const _renderHeader = (item, expanded, closed, data) => {
  return (
    <>
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
          justifyContent: 'space-between',
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
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            {data.dokter}
          </Text>
          <Text note style={{color: '#F7FFF7'}}>
            {data.jadwal}
          </Text>
          <Text>Total Antrian : 50</Text>
        </View>
        <View style={{right: 10, position: 'absolute'}}>
          {closed ? (
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
          ) : (
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                fontWeight: 'bold',
                alignSelf: 'center',
              }}>
              Pilih
            </Text>
          )}
        </View>

        {expanded ? (
          <Icon style={{fontSize: 18}} name="remove-circle" />
        ) : (
          <Icon style={{fontSize: 18}} name="add-circle" />
        )}
      </LinearGradient>
    </>
  );
};

const _renderContent = (item) => {
  return (
    <Text
      style={{
        backgroundColor: '#e3f1f1',
        padding: 10,
        fontStyle: 'italic',
      }}>
      {item.content}
    </Text>
  );
};

export default function SortbyDay({data}) {
  const closed = false;

  return (
    <>
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
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            {data.dokter}
          </Text>
          <Text note style={{color: '#F7FFF7'}}>
            {data.jadwal}
          </Text>
          <Text>Total Antrian : 50</Text>
        </View>
        <View style={{right: 10, position: 'absolute'}}>
          {closed ? (
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
          ) : (
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                fontWeight: 'bold',
                alignSelf: 'center',
              }}>
              Pilih
            </Text>
          )}
        </View>
      </LinearGradient>
      <Accordion
        dataArray={dataArray}
        expanded={[0]}
        animation={true}
        headerStyle={{backgroundColor: '#b7daf8'}}
        contentStyle={{backgroundColor: '#ddecf8'}}
        renderHeader={_renderHeader(closed, data)}
      />
    </>
  );
}
