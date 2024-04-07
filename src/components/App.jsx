import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import { useDispatch } from "react-redux"

import Loader from "./Loader/Loader";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import PublicRoute from "./guards/PublicRoute";
import PrivateRoute from "./guards/PrivateRoute";
// import { refreshUser } from "store/auth/authOperations";

const SigninPage = lazy(() => import('./pages/SigninPage/SigninPage'))
const SignupPage = lazy(() => import('./pages/SignupPage/SignupPage'))
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))


export const App = () => {

  // const dispatch = useDispatch()

  // useEffect(() => {

  //  dispatch(refreshUser())
    
  // }, [dispatch])


  return (
    <>
      <Loader />
      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element ={<WelcomePage/>}/>
            <Route path="welcome" element={
              <PublicRoute>
                <WelcomePage />
              </PublicRoute>
            } />
            <Route path="signin" element={
              <PublicRoute>
                <SigninPage />
              </PublicRoute>
            } />
            <Route path="signup" element={
              <PublicRoute>
                <SignupPage />
              </PublicRoute>
            } />
            <Route path="home" element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            } />
          </Route>
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </>
  );
};
