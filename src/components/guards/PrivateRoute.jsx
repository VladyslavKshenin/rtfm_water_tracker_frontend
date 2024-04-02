import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectIsLoggedIn } from "store/auth/authSelectors"

const PrivateRoute = ({ children }) => {

    const isLoggedIn = useSelector(selectIsLoggedIn)

    return !isLoggedIn ? <Navigate to="/signin"/> : children
}

export default PrivateRoute