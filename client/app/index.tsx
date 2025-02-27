import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Home from "../screens/Home";
import About from "../screens/About";
import ProductDetails from "../screens/ProductDetails";
import Cart from "../screens/Cart";
import Checkout from "../screens/Checkout";
import Payment from "../screens/Payment";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import Account from "../screens/Account/Account";
import Notifications from "../screens/Account/Notifications";
import Profile from "../screens/Account/Profile";
import MyOrders from "../screens/Account/MyOrders";
import Dashboard from "../screens/Admin/Dashboard";

//routes
const Stack = createNativeStackNavigator();
export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="productDetails" component={ProductDetails} />
        <Stack.Screen name="checkout" component={Checkout} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="myorders" component={MyOrders} />
        <Stack.Screen name="notifications" component={Notifications} />
        <Stack.Screen name="adminPanel" component={Dashboard} />
        <Stack.Screen name="payment" component={Payment} />
        <Stack.Screen name="account" component={Account} />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="cart" component={Cart} />
        <Stack.Screen name="mobile" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
