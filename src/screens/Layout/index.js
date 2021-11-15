import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import C from '_constants';
import {Feather as Icons} from '@expo/vector-icons/'
import I18n from '_language';

const Layout = ({ children }) => {
  let [fontsLoaded] = useFonts({ Inter_400Regular, Inter_500Medium, Inter_700Bold });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {children}
      </SafeAreaView>
    );
  }
}

export {
  Layout,
  C,
  I18n,
  Icons
}


