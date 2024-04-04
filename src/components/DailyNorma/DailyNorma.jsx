// import DailyNormaModal from "components/DailyNormaModal/DailyNormaModal"
// import Modal from "components/Modal/Modal"
import { useDispatch } from "react-redux"
// import { showModalSelector } from "store/modal/modalSelector"
import { showModal } from "store/modal/modalSlice"
import css from "./DailyNorma.module.css"

export const DailyNorma = () => {

    // const showDaily = useSelector(showModalSelector)
    const dispatch = useDispatch()
    
  return (
    <div className={css.wrapp}>
        <h3>My daily norma</h3>
        <div>
            <p><strong>2 L</strong></p>
            <button type="button" onClick={()=>{dispatch(showModal())}}>Edit</button>
        </div>
        {/* {showDaily ? 
                <Modal>
                  <DailyNormaModal/>
                </Modal>
              : null} */}
    </div>
  )
}
