import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import AppIntro from 'rn-falcon-app-intro';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default class Welcome extends Component {
  render() {
    return (
      <AppIntro
        dotColor="rgba(168, 178, 108, 0.5)"
        activeDotColor="#A8B26C"
        leftTextColor="#A8B26C"
        rightTextColor="#A8B26C"
        doneBtnLabel={() => this.props.navigation.navigate('Navigation')}>
        <View style={[styles.slide]}>
          <View
            style={{
              position: 'absolute',
              top: 50,
              left: 0,
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height,
            }}
            level={20}>
            <Image
              style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height / 4,
              }}
              source={require('../assets/wait.png')}
            />
          </View>

          <View level={50}>
            <Text style={styles.text} top={50}>
              Selamat Datang di Antrian Online Rumah Sakit Islam Bogor
            </Text>
          </View>
        </View>
        <View style={[styles.slide]}>
          <View level={-10}>
            <Text style={styles.text}>Page 2</Text>
          </View>
          <View level={5}>
            <Text style={styles.text}>Page 2</Text>
          </View>
          <View level={20}>
            <Text style={styles.text}>Page 2</Text>
          </View>
        </View>
        <View style={[styles.slide]}>
          <View level={8}>
            <Text style={styles.text}>Page 3</Text>
          </View>
          <View level={0}>
            <Text style={styles.text}>Page 3</Text>
          </View>
          <View level={-10}>
            <Text style={styles.text}>Page 3</Text>
          </View>
        </View>
        <View style={[styles.slide]}>
          <View level={5}>
            <Text style={styles.text}>Page 4</Text>
          </View>
          <View level={10}>
            <Text style={styles.text}>Page 4</Text>
          </View>
          <View level={15}>
            <Text style={styles.text}>Page 4</Text>
          </View>
        </View>
      </AppIntro>
    );
  }
}
