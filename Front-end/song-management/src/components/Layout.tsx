import { Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import { Container } from "./Stylels/Container";
import Footer from "./Footer";

const Layout = () => {
  return (
    
    <Container>
      <Navbar/>
      <main>
        <Outlet /> {/* This is where child components will be rendered */}
      </main>
     <Footer/>
    </Container>

  );
};

export default Layout;
