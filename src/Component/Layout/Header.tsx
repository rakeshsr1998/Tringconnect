import React from 'react';
import {Image, View} from 'react-native';
import {style} from './header-style';

export const Header = () => {
  return (
    <View style={style.container}>
      <View style={style.subContainer}>
        <View>
          <Image source={require('../../assets/menu.png')} style={style.menu} />
        </View>
        <View>
          <Image source={require('../../assets/logo.png')} style={style.logo} />
        </View>
        <View style={style.row}>
          <Image source={require('../../assets/bell.png')} style={style.menu} />
          <Image
            source={require('../../assets/search.png')}
            style={style.bell}
          />
        </View>
      </View>
    </View>
  );
};
