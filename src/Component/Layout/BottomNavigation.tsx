import React from 'react';
import {Image, View} from 'react-native';
import {style} from './bottom-style';

export const BottomNavigation = () => {
  return (
    <View style={style.container}>
      <View style={style.subContainer}>
        <Image
          source={require('../../assets/home-filled.png')}
          style={style.menu}
        />
        <Image
          source={require('../../assets/dull-calender.png')}
          style={style.menu}
        />
        <Image
          source={require('../../assets/dull-post.png')}
          style={style.menu}
        />
        <Image
          source={require('../../assets/dull-folder.png')}
          style={style.menu}
        />
        <Image
          source={require('../../assets/dull-chat.png')}
          style={style.menu}
        />
      </View>
    </View>
  );
};
