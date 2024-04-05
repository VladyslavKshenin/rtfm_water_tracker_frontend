import { Svg } from "components/Icons/Icons"
import { useDispatch } from "react-redux"
import { showModal } from "store/modal/modalSlice"
import css from "./UserLogoutModal.module.css"
import { logOut } from "store/auth/authOperations"
import { Navigate } from "react-router-dom"
import { Notify } from "notiflix"

const UserLogoutModal = () => {

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(logOut())
    .unwrap()
      .then((payload) => {
        dispatch(showModal())
        Navigate('/')
        Notify.success("You have successfully exited")
       })
      .catch((error) => {
        Notify.failure("Something went wrong with your logout!")
    })
  }

  return (
    <div className={css.wrapp}>
        <h2 className={css.title}>Log out</h2>
        <button type="button" onClick={()=>{dispatch(showModal())}} className={css.buttonClose}>
            <Svg id={"#close"} width={24} height={24}/>
        </button>
        <h3 className={css.subtitle}>Do you really want to leave?</h3>
        <ul className={css.list}>
          <li className={css.item}>
            <button type="button" onClick={handleClick} className={css.button + " " + css.buttonColor}>Log out</button>
          </li>
          <li className={css.item}>
            <button type="button" className={css.button}
              onClick={()=>{dispatch(showModal())}}>Cancel</button>
          </li>
        </ul>
    </div>
  )
}

export default UserLogoutModal