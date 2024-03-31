import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Supsense } from 'react';
import Header from '../Header/Header';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Supsense fallback={null}>
        <Outlet />
      </Supsense>
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
