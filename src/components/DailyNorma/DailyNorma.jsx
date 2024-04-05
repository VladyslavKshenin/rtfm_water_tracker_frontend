import DailyNormaModal from "components/DailyNormaModal/DailyNormaModal"
// import Modal from "components/Modal/Modal"
import { useDispatch, useSelector } from "react-redux"
import { showModalSelector } from "store/modal/modalSelector"
import { showModal } from "store/modal/modalSlice"
import css from "./DailyNorma.module.css"

export const DailyNorma = () => {

    const showDaily = useSelector(showModalSelector)
    const dispatch = useDispatch()
    
  return (
    <div className={css.wrap}>
        <h3 className={css.title}>My daily norma</h3>
        <div className={css.wrapper}>
            <p className={css.description}><strong>2 L</strong></p>
            <button type="button" className={css.btn} onClick={()=>{dispatch(showModal())}}>
              Edit
            </button>
        </div>
        {showDaily ? 
                // <Modal>
                  <DailyNormaModal/>
                // </Modal>
              : null}
    </div>
  )
}
