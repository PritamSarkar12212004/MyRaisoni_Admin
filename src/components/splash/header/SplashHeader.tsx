import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

const SplashHeader = ({ page }: any) => {
  const router = useRouter();
  return (
    <View className="w-full flex items-center justify-between flex-row ">
      <View className="flex-row gap-1">
        <View
          className={`
          rounded-full h-1 bg-white
            ${page == 1 ? "w-8 " : "w-1"}
          `}
        ></View>
        <View
          className={`
          rounded-full h-1 bg-white
            ${page == 2 ? "w-8 " : "w-1"}
          `}
        ></View>
        <View
          className={`
          rounded-full h-1 bg-white
            ${page == 3 ? "w-8 " : "w-1"}
          `}
        ></View>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => router.push("/(auth)")}
        className="flex flex-row items-center gap-1"
      >
        <Text className="text-white">Skip</Text>
        <AntDesign name="right" size={19} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default SplashHeader;
