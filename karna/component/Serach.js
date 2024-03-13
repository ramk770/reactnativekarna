import { View, Text } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";

import { Image } from "react-native";
import { TextInput } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Search({setSearchText}) {
    const [searchInput,setSearchInput]=useState();
  return (
    <View>
      <LinearGradient
        // Background Linear Gradient
        colors={["white", "transparent"]}
        style={{ padding: 20, width: Dimensions.get("screen").width }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{  fontSize: 35 }}>
            Discover
          </Text>
          <Image
            source={require("../assets/user.png")}
            style={{ width: 50, height: 50, borderRadius: 100 }}
          />
        </View>
        <View
          style={{
            display: "flex",
            marginTop: 5,
            flexDirection: "row",
            padding: 10,
            gap: 5,
            elevation: 0.7,
            alignItems: "center",
            backgroundColor:"white",
            borderRadius: 5,
          }}
        >
          <FontAwesome name="search" size={24} color="grey" />
          <TextInput
            placeholder="Search"
            style={{ backgroundColor: "white", width: "80%" }}
            onChangeText={(value) => setSearchInput(value)}
            onSubmitEditing={() => setSearchText(searchInput)}
          />
        </View>
      </LinearGradient>
    </View>
  );
}
