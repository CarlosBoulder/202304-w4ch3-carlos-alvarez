import { useContext } from "react";
import PhoneNumberContext from "../../store/contexts/PhoneNumberContext/PhoneNumberContext";

const Display = (): JSX.Element => {
  const { phoneNumber } = useContext(PhoneNumberContext);

  return (
    <div className="actions">
      <span className="number">{phoneNumber}</span>
      <a href="call" className="call">
        Call
      </a>
      <a href="hang-up" className="hang active">
        Hang up
      </a>
    </div>
  );
};

export default Display;
