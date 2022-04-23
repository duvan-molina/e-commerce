const SubTitleComponent: React.FC<{ title: string }> = ({ title }) => {
  return (
    <h2 className="mb-6 mt-6 text-main text-center sm:text-left md:mt-12 font-bold text-2xl">
      {title}
    </h2>
  );
};

export default SubTitleComponent;
