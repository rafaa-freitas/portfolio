import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';

function Layout() {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
