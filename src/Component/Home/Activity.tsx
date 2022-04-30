import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './activity-style';
import {Comments} from './Comments';
import {LatestCourses} from './LatestCourses';

const activity = [
  {
    id: 1,
    name: 'Kreethiraj K',
    role: 'Product Delivery Manager',
    post: 'Successfully delivered this great kitchen app to market. Kudos the entire team.',
    date: '2017-01-01',
    time: '12:34:56',
    likes: 240,
    comments: 12,
    images: [
      'https://images.unsplash.com/photo-1564758596151-c17d1590f483?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmUlMjBmb29kfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    ],
  },
  {
    id: 2,
    name: 'Sridhar Rao',
    role: 'Director Marketing Sales',
    post: 'Good Marketing makes the company look smart. Great marketing makes customer feel smart',
    date: '2022-04-29',
    time: '16:42:06',
    likes: 210,
    comments: 50,
    images: [
      'https://images.unsplash.com/photo-1564758596151-c17d1590f483?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmUlMjBmb29kfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    ],
  },
  {
    isAd: true,
    images: [
      'https://pbs.twimg.com/media/FLFNFuiakAQZ9fV?format=jpg&name=4096x4096',
    ],
    likes: 240,
    comments: 12,
    name: 'tringapps',
    post: 'tringapps is now an AWS partner.',
    id: 4,
    role: 'Management',
    logo: 'https://media-exp1.licdn.com/dms/image/C560BAQEuX2znXgYC3g/company-logo_200_200/0/1645424234515?e=2147483647&v=beta&t=kPBX8QPRzjhBoJKzKXisgKyNedK811qlGk5mpGGdgA0',
  },
  {
    latestCourse: true,
    likes: 240,
    comments: 12,
    name: 'Latest Courses',
    id: 3,
  },
];
export const Activity = () => {
  const render = ({item, index}: any) => {
    const logo = item.logo ? item.logo : `https://i.pravatar.cc/34${index}`;
    return (
      <>
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={styles.flexRow}>
              {!item.latestCourse && (
                <Image source={{uri: logo}} style={styles.profileImage} />
              )}
              <View style={styles.nameContainer}>
                <Text style={styles.name}>{item.name}</Text>
                {!item.latestCourse && (
                  <Text style={styles.role}>{item.role}</Text>
                )}
              </View>
            </View>
            <View>
              <Image
                source={require('../../assets/more.png')}
                style={styles.more}
              />
            </View>
          </View>
          <Text style={styles.desc}>{item.post}</Text>
          {!item.latestCourse && (
            <View style={styles.flexRow}>
              <Text numberOfLines={1} style={styles.hashTags}>
                #Network #kitchenapp #foodies #productdesig #Sales{' '}
                <Text style={styles.readMore}>Read More </Text>
              </Text>
              <Text style={styles.arrow}>{'>'}</Text>
            </View>
          )}
        </View>
        {item.latestCourse ? (
          <View style={styles.latestCon}>
            <LatestCourses />
          </View>
        ) : (
          <>
            {item.isAd ? (
              <View style={styles.adContainer}>
                <View style={styles.center}>
                  <Image source={{uri: item.images[0]}} style={styles.banner} />
                </View>
                <View style={styles.adTextContainer}>
                  <View>
                    <Text style={{...styles.title, marginTop: 13}}>
                      Introducing Amazon EMR
                    </Text>
                    <Text style={styles.title}>serverless</Text>
                    <Text style={styles.minorText}>
                      aws.amazon.com | 2 mins read
                    </Text>
                  </View>
                  <TouchableOpacity style={styles.knowMoreBtn}>
                    <Text style={styles.knowMoreText}>Know More</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <Image source={{uri: item.images[0]}} style={styles.postImage} />
            )}
          </>
        )}

        <View style={styles.secondCon}>
          <Text style={styles.time}>3 hours ago</Text>
          <View style={styles.rightIconCon}>
            <Image
              source={require('../../assets/heart.png')}
              style={styles.more}
            />
            <Text style={styles.like}>{item.likes}</Text>
            <Image
              source={require('../../assets/comment.png')}
              style={styles.commentPng}
            />
            <Text style={styles.comment}>{item.comments}</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.commentCon}>
          <View style={styles.commentRow}>
            <Image
              style={styles.avatar}
              source={{
                uri: `https://i.pravatar.cc/24${item.id}`,
              }}
            />
            <Image
              style={styles.secondAvatar}
              source={{
                uri: `https://i.pravatar.cc/24${item.id + 1}`,
              }}
            />
            <Image
              style={styles.thirdAvatar}
              source={{
                uri: `https://i.pravatar.cc/24${item.id + 2}`,
              }}
            />
            <Text style={styles.likedBy}>
              Liked by <Text style={styles.font}>KnE</Text> and{' '}
              <Text style={styles.font}>{item.likes - 1} others</Text>
            </Text>
          </View>
          <Comments />
        </View>
      </>
    );
  };
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      keyExtractor={({}, index) => index.toString()}
      horizontal={false}
      data={activity}
      renderItem={render}
    />
  );
};
