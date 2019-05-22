import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import About from "./About";

export class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    return (
      <View>
        <Text> Home </Text>
        <Button
          title="Go To About"
          onPress={() => this.props.navigation.navigate("About")}
        />
      </View>
    );
  }
}

export default Home;
