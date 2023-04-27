import { PropsWithChildren, useState } from "react";
import PhoneContext from "./PhoneNumberContext";
import { PhoneNumberContextStructure } from "./types";

const PhoneContextProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const [phoneNumber, setPhoneNumber] = useState<string[]>([]);

  const addDigit = (number: string): void => {
    setPhoneNumber((phoneNumber) => {
      return [...phoneNumber, number];
    });
  };

  const phoneStore: PhoneNumberContextStructure = {
    phoneNumber,
    addDigit,
  };

  return (
    <PhoneContext.Provider value={phoneStore}>{children}</PhoneContext.Provider>
  );
};

export default PhoneContextProvider;
