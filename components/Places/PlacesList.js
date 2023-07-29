import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import PlaceItem from "./PlaceItem";

export default function PlacesList({ places }) {

  const navigation = useNavigation();

  function selectPlaceHandler(id) {
    navigation.navigate('PlaceDetails', {
      placeId: id
    })
  }

  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No Places added yet - start adding some
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      style={styles.list}
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <PlaceItem place={item} onSelect={selectPlaceHandler} />)
      }}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    margin: 24,

  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});
