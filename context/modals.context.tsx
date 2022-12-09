import { createContext, useEffect, useState } from "react";
import { MODALS } from "../modals";
import Modal1 from "../components/modal1";
import Modal2 from "../components/modal2";

const modalsArray = [
  {
    id: 1,
    src: < Modal1 props={MODALS[0]} />,
  },
  {
    id: 2,
    src: < Modal2 props={MODALS[1]} />,
  },
];

export const ModalsContext = createContext({
  setModals: () => null,
  modals: [],
  
});

export const ModalsProvider = ({ children }) => {
  const [modals, setModals] = useState([]);

  

  useEffect(() => {
    setModals(modalsArray);
    
  }, []);

  const value = { modals, setModals };

  return (
    <ModalsContext.Provider value={value}>{children}</ModalsContext.Provider>
  );
};
