import {Image, View, TextInput, Pressable, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import {styles} from './comment-style';
import {styles as style} from './activity-style';

function useForceUpdate() {
  const [value, setValue] = useState(false); // integer state
  return () => setValue(!value); // update the state to force render
}

export const Comments = ({data, i, array}: any) => {
  const [text, setText] = useState('');
  const [showDiv, setDiv] = useState(false);
  const forceUpdate = useForceUpdate();
  const [comments, setComments] = useState([]);

  const onPush = () => {
    if (text) {
      const _data: any = comments;
      _data.push(text);
      setComments(_data);
      setTimeout(() => {
        setText('');
        setDiv(false);
        array.forEach((_item: any, ind: any) => {
          if (ind === i) {
            _item.comments = (_item.comments || 0) + 1;
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
              array.forEach((_item: any, ind: any) => {
                if (ind === i) {
                  _item.like = !_item.like;
                }
              });
              forceUpdate();
            }}>
            <Image
              source={
                data.like
                  ? require('../../assets/active-heart.png')
                  : require('../../assets/heart.png')
              }
              style={style.more}
            />
          </Pressable>
          <Text style={style.like}>
            {(data.likes || 0) + (data.like || 0 ? +1 : 0)}
          </Text>
          <Pressable onPress={() => setDiv(true)} testID="showDiv">
            <Image
              source={require('../../assets/comment.png')}
              style={style.commentPng}
            />
          </Pressable>
          <Text style={style.comment}>{data.comments || 0}</Text>
        </View>
      </View>
      <View style={style.line} />
      <View style={style.commentCon}>
        <View style={style.commentRow}>
          <Image
            style={style.avatar}
            source={{
              uri: `https://i.pravatar.cc/24${data.id}`,
            }}
          />
          <Image
            style={style.secondAvatar}
            source={{
              uri: `https://i.pravatar.cc/24${data.id + 1}`,
            }}
          />
          <Image
            style={style.thirdAvatar}
            source={{
              uri: `https://i.pravatar.cc/24${data.id + 2}`,
            }}
          />
          <Text style={style.likedBy}>
            Liked by <Text style={style.font}>KnE</Text> and{' '}
            <Text style={style.font}>
              {data.likes + (data.like ? 0 : -1)} others
            </Text>
          </Text>
        </View>
        <FlatList
          ItemSeparatorComponent={() => <View style={{height: 6}} />}
          keyExtractor={id => id.toString()}
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
              <Pressable
                style={styles.arrowContainer}
                onTouchStart={() => {
                  onPush();
                }}>
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
