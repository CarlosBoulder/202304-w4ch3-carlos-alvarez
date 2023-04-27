interface KeyProps {
  className: string;
  value: string;
  actionOnClick: (keyText: string) => void;
}

const Key = ({ className, value, actionOnClick }: KeyProps): JSX.Element => {
  return (
    <li>
      <button className={`${className}`} onClick={() => actionOnClick(value)}>
        {value}
      </button>
    </li>
  );
};

export default Key;
