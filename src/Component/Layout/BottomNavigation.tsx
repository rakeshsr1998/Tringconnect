import React, {useState} from 'react';
import {Image, Pressable, View} from 'react-native';
import {style} from './bottom-style';

export const BottomNavigation = () => {
  const [index, setIndex] = useState(0);
  return (
    <View style={style.container}>
      <View style={style.subContainer}>
        <Pressable onPress={() => setIndex(0)}>
          <Image
            source={require('../../assets/home-filled.png')}
            style={style.menu}
          />
          {index === 0 && <View style={style.bar} />}
        </Pressable>
        <Pressable onPress={() => setIndex(1)}>
          <Image
            source={require('../../assets/dull-calender.png')}
            style={style.menu}
          />
          {index === 1 && <View style={style.bar} />}
        </Pressable>
        <Pressable onPress={() => setIndex(2)}>
          <Image
            source={require('../../assets/dull-post.png')}
            style={style.menu}
          />
          {index === 2 && <View style={style.bar} />}
        </Pressable>
        <Pressable onPress={() => setIndex(3)}>
          <Image
            source={require('../../assets/dull-folder.png')}
            style={style.menu}
          />
          {index === 3 && <View style={style.bar} />}
        </Pressable>
        <Pressable onPress={() => setIndex(4)}>
          <Image
            source={require('../../assets/dull-chat.png')}
            style={style.menu}
          />
          {index === 4 && <View style={style.bar} />}
        </Pressable>
      </View>
    </View>
  );
};
