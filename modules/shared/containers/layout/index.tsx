import Footer from "./components/footer";
import Header from "./components/header";

const Layout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <div className="relative mx-auto">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
