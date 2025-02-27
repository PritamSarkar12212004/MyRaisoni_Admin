import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import { userContext } from "@/src/context/ContextApi";

const MainHeader = () => {
  const { isModalVisible, setModalVisible } = userContext();
  const togalButton = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View className="w-full flex items-center justify-between flex-row">
      <TouchableOpacity
        className="flex-row items-center justify-center gap-4"
        activeOpacity={0.8}
        onPress={togalButton}
      >
        <View className="">
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/9a/7b/40/9a7b4099d1a9d5ff523aa0ff4ea3536c.jpg",
            }}
            className="h-16 w-16 rounded-full"
            resizeMode="cover"
          />
        </View>
        <View className="flex">
          <Text className="text-xl  text-gray-400 tracking-tighter">
            Welcome back
          </Text>
          <Text className="text-white font-bold text-xl">Pritam</Text>
        </View>
      </TouchableOpacity>
      <View className="flex-row items-center justify-center gap-3">
        <TouchableOpacity className="h-14 w-14 border-[2px] border-gray-400 rounded-full flex items-center justify-center">
          <Ionicons name="notifications-sharp" size={24} color="#FAFDFF" />
        </TouchableOpacity>
        <TouchableOpacity className="h-14 w-14 border-[2px] border-gray-400 rounded-full flex items-center justify-center">
          <Entypo name="calendar" size={24} color="#FAFDFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainHeader;
