import { ReactComponent as Close} from 'images/close.svg'

const UserLogoutModal = () => {
  return (
    <>
        <h2>Log out</h2>
        <Close width={24} height={24}/>
        <h3>Do you really want to leave?</h3>
        <ul>
            <li><button type="button">Cancel</button></li>
            <li><button type="button">Logout</button></li>
        </ul>
    </>
  )
}

export default UserLogoutModal