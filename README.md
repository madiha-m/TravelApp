## TravelApp

### error 
-   Error: NativeViewGestureHandler must be used as a descendant of GestureHandlerRootView. Otherwise the gestures will not be recognized.
>   Solution: import "TouchableOpacity" or "RefreshControl" from  "react-native" instead "react-native-gesture-handler" 


-   Error: font family "ionicons" is not a ssytem font , and has not been loaded through font.loadAsync .{Ionicons not showing properly, chines like words was showing}
>   Remove "expo-font" from "package.json". Delete "node_modules" and "package.lock.json". Run "npm install".

-   Require cycles are allowed, but can result in uninitialized values. Consider refactoring to remove the need for a cycle.
 ERROR  Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
 ERROR  TypeError: Cannot read property 'useContext' of null, js engine: hermes
 ERROR  Invariant Violation: "main" has not been registered. This can happen if:
* Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.
* A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called., js engine: hermes
>   Was a syntax error, created an instance outside of the function.

