import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRouter } from "expo-router";

const NextButton = ({ path }: any) => {
  const navigation = useNavigation();
  const router = useRouter();
  return (
    <View className="w-full flex items-center justify-center px-5">
      <TouchableOpacity
        onPress={() =>
          path ? navigation.navigate(path) : router.push("/(auth)")
        }
        activeOpacity={0.8}
        className="w-full h-16 bg-white rounded-full flex items-center justify-center"
      >
        <Text className="text-xl font-semibold text-[#336DF6] ">Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NextButton;
