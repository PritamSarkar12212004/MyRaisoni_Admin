import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const _Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="MianLoginPage"
        options={{
          animation: "ios_from_right",
        }}
      />
    </Stack>
  );
};

export default _Layout;
