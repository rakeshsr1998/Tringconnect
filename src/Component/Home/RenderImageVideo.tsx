import React, { useState } from 'react';
import { Image, View, Pressable, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './activity-style';
import Carousel from 'react-native-snap-carousel';

const width = Dimensions.get('screen').width * 0.9;

export const RenderImageOrVideo = ({ data }: any) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const toggleModal = i => {
    setIndex(i);
    setModalVisible(!isModalVisible);
  };

  const render = ({ item }: any) => {
    return (
      <Image
        resizeMode="cover"
        source={{ uri: item }}
        style={styles.modalCover}
      />
    );
  };

  return (
    <>
      {data.images.length == 1 && (
        <Pressable onPress={() => toggleModal(0)} testID="image1">
          <Image source={{ uri: data.images[0] }} style={styles.postImage} />
        </Pressable>
      )}
      {data.images.length > 1 && (
        <>
          <View style={styles.flexRow}>
            <Pressable
              style={styles.flexOne}
              onPress={() => toggleModal(0)}
              testID="image2">
              <Image source={{ uri: data.images[0] }} style={styles.multiImage} />
            </Pressable>
            <Pressable
              style={styles.flexTwo}
              onPress={() => toggleModal(1)}
              testID="image3">
              <Image source={{ uri: data.images[1] }} style={styles.multiImage} />
            </Pressable>
          </View>
          <View style={styles.flexRow}>
            <Pressable
              style={styles.flexThree}
              onPress={() => toggleModal(2)}
              testID="image4">
              <Image source={{ uri: data.images[2] }} style={styles.multiImage} />
            </Pressable>
            <Pressable
              style={styles.flexFour}
              onPress={() => toggleModal(3)}
              testID="image5">
              <Image source={{ uri: data.images[3] }} style={styles.multiImage} />
            </Pressable>
          </View>
        </>
      )}
      <Modal
        onBackdropPress={() => setModalVisible(false)}
        hasBackdrop={true}
        isVisible={isModalVisible}>
        <View>
          <Pressable
            testID='close'
            onPress={() => setModalVisible(false)}
            style={styles.closeIcon}>
            <Image
              source={require('../../assets/close.png')}
              style={styles.more}
            />
          </Pressable>
          <Carousel
            firstItem={index}
            pagingEnabled={true}
            data={data.images}
            renderItem={render}
            sliderWidth={width}
            itemWidth={width}
          />
        </View>
      </Modal>
    </>
  );
};
