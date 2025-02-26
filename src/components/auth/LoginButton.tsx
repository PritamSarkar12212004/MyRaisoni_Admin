import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";

const LoginButton = () => {
  const navigation = useNavigation();
  return (
    <View className="w-full flex items-center justify-center px-5">
      <TouchableOpacity
        onPress={() => navigation.navigate("MianLoginPage")}
        activeOpacity={0.8}
        className="w-full h-16 bg-[#336DF6] rounded-full flex items-center justify-center"
      >
        <Text className="text-xl font-semibold text-white ">Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginButton;
