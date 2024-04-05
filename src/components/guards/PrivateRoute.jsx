import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { selectorIsAuth } from "store/auth/authSelectors"

const PrivateRoute = ({ children }) => {

    const isAuth = useSelector(selectorIsAuth)

    return !isAuth ? <Link to="/signin"/> : children
}

export default PrivateRoute