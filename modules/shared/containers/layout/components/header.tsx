const Header: React.FC<{}> = () => (
  <header className="flex w-full py-4 md:py-10 items-center">
    <div className="basis-1/2">
      <h1>Style shop</h1>
    </div>
    <div className="basis-1/2">
      <ul className="flex w-full text-right items-center">
        <li className="basis-1/2 mx-2 md:mx-10">Categorias</li>
        <li className="basis-1/2 mx-2 md:mx-10">Ofertas</li>
        <li className="basis-1/2 mx-2 md:mx-10">Contacto</li>
        <li className="basis-1/2 mx-2 md:mx-10">Nosotros</li>
      </ul>
    </div>
    <div className="basis-1/2 text-right">item 3 </div>
  </header>
);

export default Header;
