import { View, Text } from "react-native";
import React from "react";

const ConditionPage = () => {
  return (
    <View className="w-full flex items-center justify-center">
      <Text className="text-sm">By sign in you agree to </Text>
      <Text className="text-sm">
        <Text className="font-extrabold">Terms</Text> & Conditions Guidance and
        Our
        <Text className="font-extrabold"> Privacy Policy</Text>
      </Text>
    </View>
  );
};

export default ConditionPage;
