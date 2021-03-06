import React, {useState} from 'react';
import {Image, Pressable, View} from 'react-native';
import {style} from './bottom-style';

export const BottomNavigation = () => {
  const [index, setIndex] = useState(0);
  return (
    <View style={style.container}>
      <View style={style.subContainer}>
        <Pressable onPress={() => setIndex(0)} testID="home">
          <Image
            source={
              index === 0
                ? require('../../assets/home-filled.png')
                : require('../../assets/inactive-home.png')
            }
            style={style.menu}
          />
          {index === 0 && <View style={style.bar} />}
        </Pressable>
        <Pressable onPress={() => setIndex(1)} testID="cal">
          <Image
            source={
              index === 1
                ? require('../../assets/active-cal.png')
                : require('../../assets/dull-calender.png')
            }
            style={style.menu}
          />
          {index === 1 && <View style={style.bar} />}
        </Pressable>
        <Pressable onPress={() => setIndex(2)} testID="post">
          <Image
            source={
              index === 2
                ? require('../../assets/active-post.png')
                : require('../../assets/dull-post.png')
            }
            style={style.menu}
          />
          {index === 2 && <View style={style.bar} />}
        </Pressable>
        <Pressable onPress={() => setIndex(3)} testID="folder">
          <Image
            source={
              index === 3
                ? require('../../assets/active-folder.png')
                : require('../../assets/dull-folder.png')
            }
            style={style.menu}
          />
          {index === 3 && <View style={style.bar} />}
        </Pressable>
        <Pressable onPress={() => setIndex(4)} testID="chat">
          <Image
            source={
              index === 4
                ? require('../../assets/active-chat.png')
                : require('../../assets/dull-chat.png')
            }
            style={style.menu}
          />
          {index === 4 && <View style={style.bar} />}
        </Pressable>
      </View>
    </View>
  );
};
