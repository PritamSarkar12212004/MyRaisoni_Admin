import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const MainLoginButton = () => {
  return (
    <View className="flex w-full px-5">
      <TouchableOpacity
        className={`w-full h-16 bg-[#336DF6]  flex items-center justify-center rounded-full tracking-widest leading-loose`}
        activeOpacity={0.8}
      >
        <Text className="text-xl font-bold text-white">Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainLoginButton;
