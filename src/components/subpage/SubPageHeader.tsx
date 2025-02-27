import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
const SubPageHeader = () => {
  return (
    <View className="w-full flex-row items-center justify-between">
      <TouchableOpacity activeOpacity={0.8}>
        <AntDesign name="arrowleft" size={30} color="white" />
      </TouchableOpacity>
      <View />
      <View />
    </View>
  );
};

export default SubPageHeader;
