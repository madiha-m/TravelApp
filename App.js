import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as Splashscreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';   //to wrap all navigation containers
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboarding, Search } from './screens';
import BottomTabNavigation from './navigation/BottomTabNavigation';

const Stack = createNativeStackNavigator();

export default function App() {

  // bool var to check font loaded or not
  const [fontsLoaded] = useFonts({
    // here destructuring obj
    regular: require('./assets/fonts/Montserrat-Regular.ttf'),
    bold: require('./assets/fonts/Montserrat-Bold.ttf'),
    xBold: require('./assets/fonts/Montserrat-ExtraBold.ttf'),
    light: require('./assets/fonts/Montserrat-Light.ttf'),
    medium: require('./assets/fonts/Montserrat-Medium.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await Splashscreen.hideAsync();
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null;
  }

  return (
    // <View style={styles.container}>
    //   <Text style={styles.textStyleRegular}>Regular text</Text>
    //   <Text style={styles.textStyleBold}>Bold text</Text>
    //   <Text style={styles.textStyleXBold}>Extra Bold text</Text>
    //   <Text style={styles.textStyleLight}>Light text</Text>
    //   <Text style={styles.textStyleMedium}>Medium text</Text>
    //   <StatusBar style="auto" />
    // </View>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Onboard' component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name='Bottom' component={BottomTabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name='Search' component={Search} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textStyleRegular: {
//     fontFamily: 'regular',
//     fontSize: 24
//   },
//   textStyleBold: {
//     fontFamily: 'bold',
//     fontSize: 24
//   },
//   textStyleXBold: {
//     fontFamily: 'xBold',
//     fontSize: 24
//   },
//   textStyleLight: {
//     fontFamily: 'light',
//     fontSize: 24
//   },
//   textStyleMedium: {
//     fontFamily: 'medium',
//     fontSize: 24
//   },
// });
