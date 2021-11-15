import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

const constants = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 54 : 66,
  Regular:'Inter_400Regular',
  Bold:'Inter_700Bold',
  Medium:'Inter_500Medium',
  ApiKey: 'a56z0fzrNpl^2',
  BaseUrl: 'https://api.example.com',
  Colors: {
    orange: '#C50',
    darkblue: '#0F3274',
    lightblue: '#6EA8DA',
    darkgrey: '#999',
  },
  IconSet:'Feather'

};

export default constants;