import {FlatList, Image, Text, View} from 'react-native';
import React from 'react';
import {styles} from './status-style';
const status = [
  {addImage: true},
  {image: 'https://i.pravatar.cc/241', name: 'HR Team'},
  {image: 'https://i.pravatar.cc/242', name: 'Creative Bees'},
  {image: 'https://i.pravatar.cc/243', name: 'Texh Mads'},
  {image: 'https://i.pravatar.cc/244', name: 'Cloud 9'},
  {image: 'https://i.pravatar.cc/246', name: 'Cloud 91'},
];

export const Status = () => {
  const render = ({item}: any) => {
    if (item.addImage) {
      return (
        <Image
          style={styles.plusIcon}
          source={require('../../assets/plus.png')}
        />
      );
    }
    return (
      <View style={styles.card}>
        <View style={styles.cardContainer}>
          <Image source={{uri: item.image}} style={styles.image} />
        </View>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.dot} />
      </View>
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
