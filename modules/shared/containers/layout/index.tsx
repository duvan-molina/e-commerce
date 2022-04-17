import Header from "./components/header";

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <div className="container mx-auto  px-4">
    {/* <Header /> */}
    {children}
    <div>footer</div>
  </div>
);

export default Layout;
