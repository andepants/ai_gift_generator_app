import React, { FunctionComponent } from 'react';
import {View, Text} from 'react-native';

export type Props = {
  name: string;
}

const HelloWorld = ({name} : Props) => {
  return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Hello, {name}!</Text>
      </View>
  );
};

export default HelloWorld;