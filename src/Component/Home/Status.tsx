import {FlatList, Image, Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './status-style';
const status = [
  {addImage: true},
  {image: 'https://i.pravatar.cc/241', name: 'HR Team', isView: false},
  {image: 'https://i.pravatar.cc/242', name: 'Creative Bees', isView: false},
  {image: 'https://i.pravatar.cc/243', name: 'Texh Mads', isView: false},
  {image: 'https://i.pravatar.cc/244', name: 'Cloud 9', isView: false},
  {image: 'https://i.pravatar.cc/246', name: 'Cloud 91', isView: false},
];

function useForceUpdate() {
  const [value, setValue] = useState(false); // integer state
  return () => setValue(!value); // update the state to force render
}

export const Status = () => {
  const forceUpdate = useForceUpdate();

  const onClick = (index: any) => {
    status.map((_item: any, ind: any) => {
      if (ind === index) {
        _item.isView = true;
      }
    });
    forceUpdate();
  };

  const render = ({item, index}: any) => {
    if (item.addImage) {
      return (
        <Pressable>
          <Image
            style={styles.plusIcon}
            source={require('../../assets/plus.png')}
          />
        </Pressable>
      );
    }
    return (
      <Pressable onPress={() => onClick(index)}>
        <View style={styles.card}>
          <View style={styles.cardContainer}>
            <Image source={{uri: item.image}} style={styles.image} />
          </View>
          <Text style={styles.name}>{item.name}</Text>
          {!item.isView && <View style={styles.dot} />}
        </View>
      </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={() => <View style={{width: 1}} />}
        keyExtractor={({}, index) => index.toString()}
        horizontal={true}
        data={status}
        renderItem={render}
      />
    </View>
  );
};
