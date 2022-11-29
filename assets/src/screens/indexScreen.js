import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  // Use which context and which value from it
  const value = useContext(BlogContext);
  return (
    <View>
      <Text>Index Screen</Text>
      <Text>Value is {value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
