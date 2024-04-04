import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectorIsAuth } from "store/auth/authSelectors"

const PrivateRoute = ({ children }) => {

    const isAuth = useSelector(selectorIsAuth)
    // console.log('isAuth', isAuth)

    return !isAuth ? <Navigate to="/signin"/> : children
}

export default PrivateRoute