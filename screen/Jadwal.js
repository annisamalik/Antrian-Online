import React, {useState} from 'react';
import {
  Container,
  Accordion,
  Content,
  Left,
  Body,
  Button,
  Icon,
  Title,
  Text,
  View,
  Header,
  Item,
  Input,
} from 'native-base';
import HeaderNav from '../component/Header';
import SortbyDay from '../component/SortbyDay';

const dataArray = [
  {title: 'Nama Poli', content: 'Jadwal Dokter hari dan button'},
  {title: 'Second Element', content: 'Lorem ipsum dolor sit amet'},
  {title: 'Third Element', content: 'Lorem ipsum dolor sit amet'},
];

const searchArray = [
  {title: 'Nama Poli', content: 'Jadwal Dokter hari dan button'},
];

const _renderHeader = (item, expanded) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#A9DAD6',
      }}>
      <Text style={{fontWeight: '600'}}> {item.title}</Text>
      {expanded ? (
        <Icon style={{fontSize: 18}} name="remove-circle" />
      ) : (
        <Icon style={{fontSize: 18}} name="add-circle" />
      )}
    </View>
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

export default function Jadwal({navigation}) {
  const [search, setSearch] = useState('');

  return (
    <Container>
      <HeaderNav navigation={navigation} />

      <Content padder>
        <SortbyDay
          data={{
            poli: 'Penyakit Dalam',
            dokter: 'dr. Tina Waluyo',
            jadwal: 'Kamis, 10:00 - 13:00',
          }}
        />
        <Accordion
          dataArray={dataArray}
          expanded={[0]}
          animation={true}
          headerStyle={{backgroundColor: '#b7daf8'}}
          contentStyle={{backgroundColor: '#ddecf8'}}
          renderHeader={_renderHeader}
        />
      </Content>
    </Container>
  );
}
