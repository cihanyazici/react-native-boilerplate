import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native';
import { observer,inject } from 'mobx-react';
import {useNavigation} from '@react-navigation/native'

const DetailsScreen = inject('CounterStore')(observer((props) => {

    const {CounterStore} = props;
    const navigation =useNavigation();

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>{CounterStore.count}</Text>
    </View>
    )
}))

export default DetailsScreen

const styles = StyleSheet.create({})
