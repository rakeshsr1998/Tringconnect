import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './latest-courses';

const courses = [
  {
    image:
      'https://digitalcloud.training/wp-content/uploads/2022/01/Amazon-DynamoDB.jpg',
    name: 'Amazon Dynamo DB',
    bookMark: false,
  },
  {
    image:
      'https://img.freepik.com/free-vector/hand-drawn-portfolio-template_52683-79647.jpg?w=2000',
    name: 'Portfolio Management',
    bookMark: false,
  },
  {
    image:
      'https://www.simplilearn.com/ice9/free_resources_article_thumb/Project-Scope-Management-Cover.jpg',
    name: 'Tringapps Management',
    bookMark: false,
  },
];

function useForceUpdate() {
  const [value, setValue] = useState(false); // integer state
  return () => setValue(!value); // update the state to force render
}

export const LatestCourses = () => {
  const forceUpdate = useForceUpdate();

  const render = ({item, index}: any) => {
    return (
      <View style={styles.card}>
        <Pressable
          style={styles.closeIcon}
          onPress={() => {
            courses.map((_item: any, ind: any) => {
              if (ind === index) {
                _item.bookMark = !_item.bookMark;
              }
            });
            forceUpdate();
          }}>
          <Image
            source={
              item.bookMark
                ? require('../../assets/active-heart.png')
                : require('../../assets/heart.png')
            }
            style={styles.more}
          />
        </Pressable>
        <Image source={{uri: item.image}} style={styles.img} />
        <View style={styles.pad}>
          <Text style={styles.name}>{item.name}</Text>
          <TouchableOpacity style={styles.regBtn}>
            <Text style={styles.regText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.flatList} />}
      keyExtractor={({}, index) => index.toString()}
      horizontal={true}
      data={courses}
      renderItem={render}
    />
  );
};
