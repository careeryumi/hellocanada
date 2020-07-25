import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import {globalStyles} from '../styles/global';

export default function Home() {

  return (
    <View>
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home screen</Text>
        </View>
    </View>
  );
}
