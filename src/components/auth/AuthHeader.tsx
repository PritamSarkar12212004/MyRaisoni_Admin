import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "expo-router";
const AuthHeader = () => {
  const navigation = useNavigation();

  return (
    <View className="w-full  justify-between">
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.goBack()}
        className="h-12 w-12 flex items-center justify-center bg-zinc-100 rounded-full"
      >
        <Feather name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default AuthHeader;
