import { userContext } from "@/src/context/ContextApi";
import AxiosInstance from "../../utils/axios/AxiosInstance";
import { useRouter } from "expo-router";

const useMainDataCall = () => {
  const { setloader } = userContext();
  const router = useRouter();
  const successFun = async (res) => {
    AxiosInstance.post("/main", {
      data: res.data.data,
    })
      .then((res) => {
        console.log(res.data.data.studentAddress);
        setloader(false);
        // router.replace("/(main)");
      })
      .catch((err) => {
        console.log(err);
        setloader(false);
        // router.replace("/(helper)/TryAginPage");
      });
  };
  return { successFun };
};

export default useMainDataCall;
