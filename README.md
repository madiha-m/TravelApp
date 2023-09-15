## TravelApp

### error 
-   Error: NativeViewGestureHandler must be used as a descendant of GestureHandlerRootView. Otherwise the gestures will not be recognized.
>   Solution: import "TouchableOpacity" or "RefreshControl" from  "react-native" instead "react-native-gesture-handler" 


-   Error: font family "ionicons" is not a ssytem font , and has not been loaded through font.loadAsync .{Ionicons not showing properly, chines like words was showing}
>   Remove "expo-font" from "package.json". Delete "node_modules" and "package.lock.json". Run "npm install".

