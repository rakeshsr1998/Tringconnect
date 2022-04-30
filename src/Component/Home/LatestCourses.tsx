import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

const courses = [
  {
    image:
      'https://digitalcloud.training/wp-content/uploads/2022/01/Amazon-DynamoDB.jpg',
    name: 'Amazon Dynamo DB',
  },
  {
    image:
      'https://img.freepik.com/free-vector/hand-drawn-portfolio-template_52683-79647.jpg?w=2000',
    name: 'Portfolio Management',
  },
  {
    image:
      'https://www.simplilearn.com/ice9/free_resources_article_thumb/Project-Scope-Management-Cover.jpg',
    name: 'Tringapps Management',
  },
];

export const LatestCourses = () => {
  const render = ({item, index}: any) => {
    return (
      <View
        style={{
          backgroundColor: 'rgba(109,114,120,0.05)',
          padding: 10,
          borderRadius: 10,
          width: 200
        }}>
        <Image
          source={{uri: item.image}}
          style={{
            width: '100%',
            height: 163,
            borderRadius: 10,
          }}
        />
        <View
          style={{
            padding: 10,
          }}>
          <Text
            style={{
              color: '#333333',
              fontFamily: 'Poppins-Regular',
              fontSize: 12,
              textAlign: 'center',
            }}>
            {item.name}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#5BBC2E',
              borderRadius: 4,
              height: 44,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 14,
                fontFamily: 'Poppins-Medium',
                textAlign: 'center',
              }}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      ItemSeparatorComponent={() => (
        <View style={{padding: 10, backgroundColor: '#ffffff'}} />
      )}
      keyExtractor={({}, index) => index.toString()}
      horizontal={true}
      data={courses}
      renderItem={render}
    />
  );
};
