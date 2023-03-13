import Header from './Header';
import FooterPage from './FooterPage';

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />

      {children}

      <FooterPage />
    </>
  );
};

export default Layout;
