import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./components/Home";
import About from "./components/About";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const AppContainer = createAppContainer(AppNavigator);

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    About: { screen: About }
  },
  {
    initialRouteName: "Home",
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
