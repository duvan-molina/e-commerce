const ContainerComponent: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={`w-full md:max-w-6xl	 mx-auto px-4 container ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
};

export default ContainerComponent;
