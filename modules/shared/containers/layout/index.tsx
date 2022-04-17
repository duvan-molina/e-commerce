import Footer from "./components/footer";

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <div className="mx-auto">
    {/* <Header /> */}
    {children}
    <Footer />
  </div>
);

export default Layout;
