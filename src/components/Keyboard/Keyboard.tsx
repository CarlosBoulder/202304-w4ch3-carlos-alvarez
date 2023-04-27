import { useContext } from "react";
import PhoneNumberContext from "../../store/contexts/PhoneNumberContext/PhoneNumberContext";
import Key from "../Key/Key";

const Keyboard = (): JSX.Element => {
  const { addDigit } = useContext(PhoneNumberContext);

  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        <Key className="key" value="1" actionOnClick={addDigit} />
        <Key className="key" value="2" actionOnClick={addDigit} />
        <Key className="key" value="3" actionOnClick={addDigit} />
        <Key className="key" value="4" actionOnClick={addDigit} />
        <Key className="key" value="5" actionOnClick={addDigit} />
        <Key className="key" value="6" actionOnClick={addDigit} />
        <Key className="key" value="7" actionOnClick={addDigit} />
        <Key className="key" value="8" actionOnClick={addDigit} />
        <Key className="key" value="9" actionOnClick={addDigit} />
        <Key className="key" value="0" actionOnClick={addDigit} />
        <Key className="key big" value="delete" actionOnClick={addDigit} />
      </ol>
    </div>
  );
};

export default Keyboard;
