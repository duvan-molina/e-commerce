const footer: React.FC = () => {
  return (
    <footer className="bg-black h-12">
      <div className="container h-full mx-auto text-white flex justify-center items-center">
        <span className="mr-1">Desarrollado por </span>
        <a
          href="https://www.linkedin.com/in/duvan-molina/"
          target="_blank"
          rel="noreferrer"
          className="text-main"
        >
          Duvan Molina
        </a>
      </div>
    </footer>
  );
};

export default footer;
