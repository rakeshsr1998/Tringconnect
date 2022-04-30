import React from 'react';
import {Platform, ScrollView, StyleSheet, View} from 'react-native';
import {Activity} from './Activity';
import {Status} from './Status';

export const Home = () => {
  return (
    <ScrollView>
      <View style={style.container}>
        <View style={style.sub}>
          <Status />
        </View>
        <Activity />
      </View>
    </ScrollView>
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
