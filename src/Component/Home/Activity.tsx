import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './activity-style';
import {Comments} from './Comments';
import {LatestCourses} from './LatestCourses';
import {RenderImageOrVideo} from './RenderImageVideo';

function useForceUpdate() {
  const [value, setValue] = useState(false); // integer state
  return () => setValue(!value); // update the state to force render
}

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
      'https://www.insegment.com/blog/wp-content/uploads/2016/04/The-Role-of-Marketing-1.jpg',
      'https://blog.hubspot.com/hubfs/marketing-techniques-Jun-30-2020-04-25-34-14-AM.jpg',
      'https://www.simplilearn.com/ice9/free_resources_article_thumb/history_and_evolution_of_digital_marketing.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSGeZcvI5QjPJBtqa6kO8rRVkGDZng_NtrMA&usqp=CAU',
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
  const forceUpdate = useForceUpdate();

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
              <RenderImageOrVideo item={item} />
            )}
          </>
        )}

        <View style={styles.secondCon}>
          <Text style={styles.time}>3 hours ago</Text>
          <View style={styles.rightIconCon}>
            <Pressable
              onPress={() => {
                activity.map((_item: any, ind: any) => {
                  if (ind === index) {
                    _item.like = !_item.like;
                  }
                });
                forceUpdate();
              }}>
              <Image
                source={
                  item.like
                    ? require('../../assets/active-heart.png')
                    : require('../../assets/heart.png')
                }
                style={styles.more}
              />
            </Pressable>
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
