type Props = {
  text: string;
  icon?: React.ReactNode;
};

const Banners: React.FC<Props> = ({ icon, text }) => {
  return (
    <div className="flex align items-center flex-col bg-lightMain p-4 rounded-md text-center cursor-pointer justify-center  h-28">
      <div className="container-icon">{icon && icon}</div>
      <span>{text}</span>
    </div>
  );
};

export default Banners;
