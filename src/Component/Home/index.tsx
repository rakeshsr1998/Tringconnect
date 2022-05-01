import React from 'react';
import {FlatList, Platform, StyleSheet, View} from 'react-native';
import {Activity} from './Activity';
import {Status} from './Status';
import {status} from './data';

export default function VirtualizedView(props: any) {
  return (
    <FlatList
      data={[]}
      ListEmptyComponent={null}
      keyExtractor={() => 'dummies'}
      renderItem={null}
      ListHeaderComponent={() => (
        <React.Fragment>{props.children}</React.Fragment>
      )}
    />
  );
}

export const Home = () => {
  return (
    <VirtualizedView>
      <View style={style.container}>
        <View style={style.sub}>
          <Status status={status} />
        </View>
        <Activity />
      </View>
    </VirtualizedView>
  );
};

const style = StyleSheet.create({
  container: {
    paddingBottom: 100,
  },
  sub: {
    padding: 10,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: Platform.OS == 'ios' ? 10 : 0,
    backgroundColor: '#f9f9f9',
    height: 123,
  },
});
