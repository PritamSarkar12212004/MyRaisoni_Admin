import { createContext, useContext, useState } from "react";
const Context = createContext();
export const ContextProvider = ({ children }: any) => {
  // modal state
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <Context.Provider value={{ isModalVisible, setModalVisible }}>
      {children}
    </Context.Provider>
  );
};
export const userContext = () => useContext(Context);
