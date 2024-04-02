import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Suspense } from 'react';
import { Header } from '../Header/Header';
import Footer from 'components/Footer/Footer';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Footer/>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
