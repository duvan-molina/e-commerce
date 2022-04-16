import Header from "./components/header";

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <div className="container mx-auto">
    <Header />
    {children}
    <div>footer</div>
  </div>
);

export default Layout;
