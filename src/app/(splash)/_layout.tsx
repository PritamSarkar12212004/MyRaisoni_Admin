import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          animation: "fade",
          animationTypeForReplace: "push",
        }}
      />
      <Stack.Screen
        name="Splash2"
        options={{
          animationDuration: 1500,
          animation: "ios_from_right",
          animationTypeForReplace: "push",
        }}
      />
      <Stack.Screen
        name="Splash3"
        options={{
          animationDuration: 1500,
          animation: "ios_from_right",
          animationTypeForReplace: "push",
        }}
      />
    </Stack>
  );
};

export default _layout;
