import { Svg } from "components/Icons/Icons"
import { useDispatch } from "react-redux"
import { showModal } from "store/modal/modalSlice"

const UserLogoutModal = () => {

  const dispatch = useDispatch

  return (
    <>
        <h2>Log out</h2>
        <button type="button" onClick={()=>{dispatch(showModal())}}>
            <Svg id={"#close"} width={24} height={24}/>
        </button>
        <h3>Do you really want to leave?</h3>
        <ul>
            <li>,
              <button type="button">Cancel</button>
            </li>
            <li>
              <button type="button">Logout</button>
            </li>
        </ul>
    </>
  )
}

export default UserLogoutModal