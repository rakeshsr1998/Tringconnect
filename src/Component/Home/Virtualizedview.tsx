import React from 'react';
import {FlatList} from 'react-native';

export default function VirtualizedView(props: any) {
  return (
    <FlatList
      data={[]}
      ListEmptyComponent={null}
      renderItem={null}
      ListHeaderComponent={() => (
        <React.Fragment>{props.children}</React.Fragment>
      )}
    />
  );
}
