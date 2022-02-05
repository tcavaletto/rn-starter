import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  var navProp = props.navigation;
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => navProp.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        onPress={() => navProp.navigate("List")}
        title="Go to List Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
