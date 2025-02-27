import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SafeAreaView } from "react-native-safe-area-context";
import AuthHeader from "@/src/components/auth/AuthHeader";
import MainLoginButton from "@/src/components/auth/MainLoginButton";

import { useState } from "react";
import useLoginHook from "@/src/hooks/auth/useLoginHook";
import useMainDataCall from "@/src/hooks/auth/useMainDataCall";
import { userContext } from "@/src/context/ContextApi";
import { useRouter } from "expo-router";
const MianLoginPage = () => {
  const { id, setid, pass, setpass, loader } = userContext();

  // manage state

  // hooks
  const { AuthKeyFinder } = useLoginHook();
  const { successFun } = useMainDataCall();

  // error manage
  const [numberError, setNumberError] = useState(true);
  const [PassError, setPassError] = useState(true);

  // pass func
  const [nopassShow, setnopassShow] = useState(true);

  // input id and pass filter
  const idInput = (id: string) => {
    const cleanedId = id.replace(/\s/g, ""); // Remove all spaces
    setNumberError(true);
    setid(cleanedId);
  };
  const passInput = (pass: string) => {
    const cleanedPass = pass.replace(/\s/g, ""); // Remove all spaces
    setPassError(true);
    setpass(cleanedPass);
  };

  // dome
  const router = useRouter();
  const logar = () => {
    // if (id === "") {
    //   setNumberError(false);
    // } else if (pass === "") {
    //   setPassError(false);
    // } else {
    //   AuthKeyFinder({ id, pass, apiCall: successFun });
    // }
    router.push("/(main)");
  };

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
              value={id}
              onChangeText={(id) => idInput(id)}
              placeholder={"Registration Number"}
              className={`w-full border-[1px] rounded-2xl p-3 mt-5 h-14 text-xl pl-12 pr-12 ${
                numberError ? "border-[#7d73e6cc]" : "border-red-500"
              } `}
            />
          </View>
          <View className="w-full  relative">
            <View className="absolute top-9 left-3">
              <Feather name="unlock" size={24} color={"#7c73e6"} />
            </View>
            <TextInput
              secureTextEntry={nopassShow}
              value={pass}
              placeholder={"Password"}
              onChangeText={(pass) => passInput(pass)}
              className={`w-full border-[1px] rounded-2xl p-3 mt-5 h-14 text-xl pl-12 pr-12 ${
                PassError ? "border-[#7d73e6cc]" : "border-red-500"
              } `}
            />
            {pass && (
              <View className="absolute right-3 top-9">
                {nopassShow ? (
                  <Feather
                    onPress={() => setnopassShow(false)}
                    name="eye-off"
                    size={24}
                    color={"#7c73e6"}
                  />
                ) : (
                  <Feather
                    onPress={() => setnopassShow(true)}
                    name="eye"
                    size={24}
                    color={"#7c73e6"}
                  />
                )}
              </View>
            )}

            <TouchableOpacity activeOpacity={0.8} className="w-full flex">
              <Text className="text-right text-[#7c73e6] font-semibold text-sm mt-2">
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <MainLoginButton logar={logar} loader={loader} />
      </View>
    </SafeAreaView>
  );
};

export default MianLoginPage;
