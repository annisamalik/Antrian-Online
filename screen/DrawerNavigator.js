import React, {useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Profile from './Profile';
import Contact from './Contact';
import Jadwal from './Jadwal';
import Antrean from './Antrean';
import Login from './Login';
import Register from './Register';
import Riwayat from './Riwayat';
import Phone from './UbahPhone';
import InputPassword from './InputPassword';
import UbahPassword from './UbahPassword';
import UbahEmail from './UbahEmail';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const ProfileNav = ({navigation}) => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Profile">
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Riwayat Berobat" component={Riwayat} />
      <Stack.Screen name="Phone" component={Phone} />
      <Stack.Screen name="Masukkan Password" component={InputPassword} />
      <Stack.Screen name="Ganti Password" component={UbahPassword} />
      <Stack.Screen name="Email" component={UbahEmail} />
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  //const [login, setLogin] = useState(false);
  const login = true;
  return login ? (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Beranda" component={Home} />
      <Drawer.Screen name="Jadwal" component={Jadwal} />
      <Drawer.Screen name="Antrean" component={Antrean} />
      <Drawer.Screen name="Profile" component={ProfileNav} />
      <Drawer.Screen name="Contact" component={Contact} />
    </Drawer.Navigator>
  ) : (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default DrawerNavigator;
