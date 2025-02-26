import "../../global.css";
import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <>
      <StatusBar hidden={true} />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </>
  );
};

export default _layout;
