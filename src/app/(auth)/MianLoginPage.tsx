import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthHeader from "@/src/components/auth/AuthHeader";
import MainLoginButton from "@/src/components/auth/MainLoginButton";
const MianLoginPage = () => {
  return (
    <SafeAreaView className="w-full h-full bg-white">
      <View className="w-full h-full px-4 pb-5">
        <AuthHeader />
        <View className="w-full flex-auto pt-5">
          <View className="w-full">
            <Text className="text-5xl font-extrabold leading-tight">
              <Text className=" font-extrabold text-[#7d73e6cc]">S</Text>
              ign in to your
            </Text>
            <Text className="text-5xl font-extrabold">account</Text>
          </View>
          <View className="w-full mt-2">
            <Text className=" font-semibold">
              Access your Account by Registretion Number & Password
            </Text>
          </View>
          <View className="w-full mt-3 relative">
            <View className="absolute top-9 left-3">
              <AntDesign name="idcard" size={24} color={"#7c73e6"} />
            </View>
            <TextInput
              placeholder={"Registration Number"}
              className={`w-full border-[1px] rounded-2xl p-3 mt-5 h-14 text-xl pl-12 pr-12 ${"border-[#7d73e6cc]"} `}
            />
          </View>
          <View className="w-full  relative">
            <View className="absolute top-9 left-3">
              <Feather name="unlock" size={24} color={"#7c73e6"} />
            </View>
            <TextInput
              className={`w-full border-[1px] rounded-2xl p-3 mt-5 h-14 text-xl pl-12 pr-12 ${"border-[#7d73e6cc]"} `}
            />
            <TouchableOpacity activeOpacity={0.8} className="w-full flex ">
              <Text className="text-right text-[#7c73e6] font-semibold text-sm mt-2">
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <MainLoginButton />
      </View>
    </SafeAreaView>
  );
};

export default MianLoginPage;
