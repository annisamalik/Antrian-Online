import React from 'react';
import {Text} from 'native-base';

import LinearGradient from 'react-native-linear-gradient';

export default function ButtonGrad({teks, onPress}) {
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.95, y: 1.0}}
      colors={['#066A19', '#30F053']}
      onPress={onPress}
      style={{
        marginTop: 40,
        width: '50%',
        alignSelf: 'center',
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 50,
      }}>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          margin: 10,
          textTransform: 'uppercase',
        }}>
        {teks}
      </Text>
    </LinearGradient>
  );
}
