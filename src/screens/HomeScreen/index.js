import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { observer, inject } from 'mobx-react';
import { C, Layout, I18n, Icons } from '_screens/Layout';
import Logo from "../../../assets/logo.svg";



const HomeScreen = inject('CounterStore')(observer((props) => {

  const navigation = useNavigation();
  const { CounterStore } = props;

  return (
    <Layout>
      <Logo width={120} height={40} />
      <Text>{I18n.t('hello')} This is Home Screen</Text>
      <Icons name="home" size={90}/>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Text style={{ fontFamily: C.Regular, fontSize: 40 }}>{CounterStore.count}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Button
          onPress={() => CounterStore.decrement()}
          title="decrement"
        />
        <Button
          onPress={() => CounterStore.increment()}
          title="increment"
        />

      </View>
    </Layout>
  )
}));

export default HomeScreen

const styles = StyleSheet.create({})
