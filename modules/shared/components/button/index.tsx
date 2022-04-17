type Props = {
  text: string;
  onClick: () => void;
};

const Button: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button
      className="w-full bg-main py-1 px-0.5 rounded-full text-white text-center"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
