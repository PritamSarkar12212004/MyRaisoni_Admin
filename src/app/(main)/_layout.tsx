import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabStyle,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="flex items-center justify-center w-12 h-12 ">
              <Entypo
                name="home"
                size={37}
                color={focused ? "#336DF6" : "gray"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Analytics"
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="flex items-center justify-center w-12 h-12 ">
              <MaterialCommunityIcons
                name="google-analytics"
                size={37}
                color={focused ? "#336DF6" : "gray"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="flex items-center justify-center w-12 h-12 ">
              <Ionicons
                name="settings"
                size={37}
                color={focused ? "#336DF6" : "gray"}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabStyle: {
    position: "absolute",
    bottom: 45,
    left: 20,
    marginLeft: 20,
    marginRight: 20,
    height: 65,
    borderRadius: 100,
    backgroundColor: "#313640",
    borderWidth: 0,
    borderColor: "#313640",
    paddingBottom: 10,
    paddingTop: 10,
    backdropFilter: "blur(10px)",
  },
});

export default _layout;
