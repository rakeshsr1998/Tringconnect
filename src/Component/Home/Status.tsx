import {FlatList, Image, Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './status-style';
import Modal from 'react-native-modal';

function useForceUpdate() {
  const [value, setValue] = useState(false); // integer state
  return () => setValue(!value); // update the state to force render
}

export const Status = ({status}: any) => {
  const forceUpdate = useForceUpdate();
  const [isModalVisible, setModalVisible] = useState(false);
  const [createPosClick, setClick] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  const onClick = (index: any) => {
    setImageSrc(status[index].image);
    setModalVisible(true);
    status.map((_item: any, ind: any) => {
      if (ind === index) {
        _item.isView = true;
      }
    });
    forceUpdate();
  };

  const render = ({item, index}: any) => {
    const testId = `modal-${index}`;
    if (item.addImage) {
      return (
        <Pressable
          onPress={() => setClick(true)}
          style={{
            justifyContent: 'center',
          }}>
          <Image
            style={styles.plusIcon}
            source={
              createPosClick
                ? require('../../assets/create-post-active.png')
                : require('../../assets/plus.png')
            }
          />
        </Pressable>
      );
    }
    return (
      <Pressable
        onPress={() => {
          setClick(false);
          onClick(index);
        }}
        testID={testId}>
        <View style={styles.card}>
          <View
            style={[
              styles.cardContainer,
              item.isView ? {borderColor: '#5BBC2E'} : {borderColor: '#979797'},
            ]}>
            <Image source={{uri: item.image}} style={styles.image} />
          </View>
          <Text style={styles.name}>{item.name}</Text>
          {!item.isView && <View style={styles.dot} />}
        </View>
      </Pressable>
    );
  };
  return (
    <>
      <View style={styles.container}>
        <FlatList
          ItemSeparatorComponent={() => <View style={{width: 1}} />}
          keyExtractor={statusPost => statusPost.id.toString()}
          horizontal={true}
          data={status}
          renderItem={render}
        />
      </View>
      <Modal
        onBackdropPress={() => setModalVisible(false)}
        hasBackdrop={true}
        isVisible={isModalVisible}>
        <View>
          <Pressable
            onPress={() => setModalVisible(false)}
            style={styles.closeIcon}>
            <Image
              source={require('../../assets/close.png')}
              style={styles.more}
            />
          </Pressable>
          <Image
            resizeMode="contain"
            source={{uri: imageSrc}}
            style={styles.modalCover}
          />
        </View>
      </Modal>
    </>
  );
};
