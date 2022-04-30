import {Image, View, TextInput, Pressable, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import {styles} from './comment-style';
import {styles as style} from './activity-style';
import {activity} from './data';

function useForceUpdate() {
  const [value, setValue] = useState(false); // integer state
  return () => setValue(!value); // update the state to force render
}

export const Comments = ({item, index}: any) => {
  const [text, setText] = useState('');
  const [showDiv, setDiv] = useState(false);
  const forceUpdate = useForceUpdate();
  const [comments, setComments] = useState([]);

  const onPush = () => {
    if (text) {
      const data: any = comments;
      data.push(text);
      setComments(data);
      setTimeout(() => {
        setText('');
        setDiv(false);
        activity.map((_item: any, ind: any) => {
          if (ind === index) {
            _item.comments = _item.comments + 1;
          }
        });
        forceUpdate();
      }, 500);
    }
  };

  return (
    <>
      <View style={style.secondCon}>
        <Text style={style.time}>3 hours ago</Text>
        <View style={style.rightIconCon}>
          <Pressable
            testID="like"
            onPress={() => {
              activity.forEach((_item: any, ind: any) => {
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
              style={style.more}
            />
          </Pressable>
          <Text style={style.like}>{item.likes + (item.like ? +1 : 0)}</Text>
          <Pressable onPress={() => setDiv(true)} testID="showDiv">
            <Image
              source={require('../../assets/comment.png')}
              style={style.commentPng}
            />
          </Pressable>
          <Text style={style.comment}>{item.comments}</Text>
        </View>
      </View>
      <View style={style.line} />
      <View style={style.commentCon}>
        <View style={style.commentRow}>
          <Image
            style={style.avatar}
            source={{
              uri: `https://i.pravatar.cc/24${item.id}`,
            }}
          />
          <Image
            style={style.secondAvatar}
            source={{
              uri: `https://i.pravatar.cc/24${item.id + 1}`,
            }}
          />
          <Image
            style={style.thirdAvatar}
            source={{
              uri: `https://i.pravatar.cc/24${item.id + 2}`,
            }}
          />
          <Text style={style.likedBy}>
            Liked by <Text style={style.font}>KnE</Text> and{' '}
            <Text style={style.font}>
              {item.likes + (item.like ? 0 : -1)} others
            </Text>
          </Text>
        </View>
        <FlatList
          ItemSeparatorComponent={() => <View style={{height: 6}} />}
          keyExtractor={(index) => index.toString()}
          horizontal={false}
          data={comments}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  ...style.flexRow,
                  padding: 15,
                  paddingBottom: 0,
                  alignItems: 'center',
                }}>
                <Image
                  style={style.thirdAvatar}
                  source={{
                    uri: `https://i.pravatar.cc/24${index}`,
                  }}
                />
                <Text style={style.likedBy}>{item}</Text>
              </View>
            );
          }}
        />
        {showDiv && (
          <View style={styles.container}>
            <Image
              style={styles.avatar}
              source={{
                uri: `https://i.pravatar.cc/241`,
              }}
            />
            <View style={styles.searchSection}>
              <TextInput
                style={styles.input}
                onChangeText={setText}
                value={text}
                placeholder="Add a comment..."
                testID="test"
              />
              <Pressable style={styles.arrowContainer} onPress={onPush}>
                <Image
                  style={styles.icon}
                  source={require('../../assets/text-arrow.png')}
                />
              </Pressable>
            </View>
          </View>
        )}
      </View>
    </>
  );
};
