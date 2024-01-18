import { Outlet } from 'react-router-dom';

import Footer from '../main/footer/Footer';

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
