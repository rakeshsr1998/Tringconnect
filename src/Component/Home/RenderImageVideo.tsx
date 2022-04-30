import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './activity-style';

export const RenderImageOrVideo = ({item}: any) => {
  if (item.images.length == 1) {
    return <Image source={{uri: item.images[0]}} style={styles.postImage} />;
  } else if (item.images.length > 1) {
    return (
      <>
        <View style={styles.flexRow}>
          <View style={styles.flexOne}>
            <Image source={{uri: item.images[0]}} style={styles.multiImage} />
          </View>
          <View style={styles.flexTwo}>
            <Image source={{uri: item.images[1]}} style={styles.multiImage} />
          </View>
        </View>
        <View style={styles.flexRow}>
          <View style={styles.flexThree}>
            <Image source={{uri: item.images[2]}} style={styles.multiImage} />
          </View>
          <View style={styles.flexFour}>
            <Image source={{uri: item.images[3]}} style={styles.multiImage} />
          </View>
        </View>
      </>
    );
  }
  return <></>;
};
