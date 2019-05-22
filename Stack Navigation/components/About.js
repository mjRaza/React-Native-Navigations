import React, { Component } from "react";
import { Text, View } from "react-native";

export class About extends Component {
  static navigationOptions = {
    title: "About"
  };
  render() {
    return (
      <View>
        <Text> About </Text>
      </View>
    );
  }
}

export default About;
