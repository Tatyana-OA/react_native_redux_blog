import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

// navigator allows for usage of navigation via props
const IndexScreen = ({ navigation }) => {
  // Use which context and which value from it
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  return (
    <View>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Show", { id: item.id })}
          >
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <Feather name="trash" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

// Every time IndexScreen is displayed, react navigation will use these options to customize displayed header.
IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    // What will be displayed in the header Right side
    headerRight: () => {
      return (
        <TouchableOpacity onPress={() => navigation.navigate("Create")}>
          <Feather name="plus" size={30} />
        </TouchableOpacity>
      );
    },
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
