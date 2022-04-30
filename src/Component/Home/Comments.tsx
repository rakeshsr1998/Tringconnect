import {Image, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {styles} from './comment-style';

export const Comments = () => {
  const [text, setText] = useState('');
  return (
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
        />
        <View style={styles.arrowContainer}>
          <Image
            style={styles.icon}
            source={require('../../assets/text-arrow.png')}
          />
        </View>
      </View>
    </View>
  );
};
