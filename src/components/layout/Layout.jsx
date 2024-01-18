import { Outlet } from 'react-router-dom';
import Header from '../main/header/Header';
import Footer from '../main/footer/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
