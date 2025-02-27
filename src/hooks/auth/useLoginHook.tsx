import { Alert } from "react-native";
import AuthConatant from "@/src/constant/AuthConatant";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userContext } from "@/src/context/ContextApi";
import axios from "axios";

const useLoginHook = () => {
  const { setloader, setglobaltoken, setglobaluid, pass, id } = userContext();
  const passIdSaver = async () => {
    try {
      await AsyncStorage.setItem("userId", JSON.stringify(id));
      await AsyncStorage.setItem("userPass", JSON.stringify(pass));
      await AsyncStorage.setItem("userToken", "true");
    } catch (error) {
      console.log(error);
    }
  };
  const AuthKeyFinder = ({ id, pass, apiCall }: any) => {
    setloader(true);
    axios
      .post("https://ghrua.cybervidya.net/api/auth/login", {
        password: pass,
        reCaptchaToken: AuthConatant.reCaptchaToken,
        userName: id,
      })
      .then((res) => {
        apiCall(res);
        setglobaltoken(res.data.data.token ? res.data.data.token : null);
        setglobaluid(res.data.data.id ? res.data.data.id : null);
        passIdSaver();
      })
      .catch((err) => {
        setloader(false);
        console.log(err.response);
        Alert.alert(
          "Error",
          "Invalid Credentials, if you entered Incorrect credentials 5 times then ID will be Blocked"
        );
      });
  };
  return { AuthKeyFinder };
};

export default useLoginHook;
