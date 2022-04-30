import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {style} from './header-style';

export const Header = () => {
  const [menu, setMenu] = React.useState(false);
  const [search, setSearch] = React.useState(false);
  const [bell, setBell] = React.useState(false);
  const [showDot, setShowDot] = React.useState(true);

  return (
    <View style={style.container}>
      <View style={style.subContainer}>
        <Pressable onPress={() => setMenu(!menu)}>
          <Image
            source={
              menu
                ? require('../../assets/active-menu.png')
                : require('../../assets/menu.png')
            }
            style={style.menu}
          />
        </Pressable>
        <View>
          <Image source={require('../../assets/logo.png')} style={style.logo} />
        </View>
        <View style={style.row}>
          <Pressable
            onPress={() => {
              setBell(!bell);
              setShowDot(false);
            }}>
            {showDot && <View style={style.dot} />}
            <Image
              source={
                bell
                  ? require('../../assets/active-bell.png')
                  : require('../../assets/bell.png')
              }
              style={style.menu}
            />
          </Pressable>
          <Pressable onPress={() => setSearch(!search)}>
            <Image
              source={
                search
                  ? require('../../assets/active-search.png')
                  : require('../../assets/search.png')
              }
              style={style.bell}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
