import React, {useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './activity-style';
import {Comments} from './Comments';
import {activity} from './data';
import {LatestCourses} from './LatestCourses';
import {RenderImageOrVideo} from './RenderImageVideo';

export const Activity = () => {
  const [activityPosts, setActivity] = useState([]);
  useEffect(() => {
    fetch('http://th-alb-1338985061.ap-south-1.elb.amazonaws.com/api/v1/feeds')
      .then(res => res.json())
      .then(allPosts => {
        const _data = [...allPosts, activity[2], activity[3]];
        setActivity(_data);
      });
  }, []);

  const renderAds = (item: any, index) => {
    if (item.isAd) {
      return (
        <View style={styles.adContainer}>
          <View style={styles.center}>
            {item.images && (
              <Image source={{uri: item.images[0]}} style={styles.banner} />
            )}
          </View>
          <View style={styles.adTextContainer}>
            <View>
              <Text style={{...styles.title, marginTop: 13}}>
                Introducing Amazon EMR
              </Text>
              <Text style={styles.title}>serverless</Text>
              <Text style={styles.minorText}>aws.amazon.com | 2 mins read</Text>
            </View>
            <TouchableOpacity style={styles.knowMoreBtn}>
              <Text style={styles.knowMoreText}>Know More</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    return <RenderImageOrVideo data={item} selectedIndex={index} />;
  };

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
          <>{renderAds(item, index)}</>
        )}
        <Comments data={item} i={index} array={activityPosts} />
      </>
    );
  };
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      keyExtractor={itemPost => ((itemPost || {}).id || {}).toString()}
      horizontal={false}
      data={activityPosts}
      renderItem={render}
    />
  );
};
