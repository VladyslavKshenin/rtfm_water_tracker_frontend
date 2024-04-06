import { Svg } from "components/Icons/Icons"
import { logOut } from "store/auth/authOperations"
import { Notify } from "notiflix"
import { useDispatch, useSelector } from "react-redux"
import css from "./UserLogoutModal.module.css"
import { logOutModalSelector } from "store/modal/modalSelector"

const UserLogoutModal = () => {

  const dispatch = useDispatch()

  // const navigate = useNavigate()
  const logOutModal = useSelector(logOutModalSelector)

  const handleClick = () => {
    dispatch(logOut())
    .unwrap()
      .then((payload) => {
        console.log('payload', payload)
        dispatch(logOutModal())
        // navigate('/')
        Notify.success("You have successfully exited")
       })
      .catch((error) => {
        Notify.failure("Something went wrong with your logout!")
    })
  }

  return (
    <div className={css.wrapp}>
        <h2 className={css.title}>Log out</h2>
        <button type="button" onClick={()=>{dispatch(logOutModal())}} className={css.buttonClose}>
            <Svg id={"#close"} width={24} height={24}/>
        </button>
        <h3 className={css.subtitle}>Do you really want to leave?</h3>
        <ul className={css.list}>
          <li className={css.item}>
            <button type="button" onClick={handleClick} className={css.button + " " + css.buttonColor}>Log out</button>
          </li>
          <li className={css.item}>
            <button type="button" className={css.button}
              onClick={()=>{dispatch(logOutModal())}}>Cancel</button>
          </li>
        </ul>
    </div>
  )
}

export default UserLogoutModal