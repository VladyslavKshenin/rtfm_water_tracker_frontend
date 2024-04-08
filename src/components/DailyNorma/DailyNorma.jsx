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
    <div className={css.position}>
        <h3 className={css.title}>My daily norma</h3>
        <div className={css.flex}>
            <p className={css.desc}><strong>1.5 L</strong></p>
            <button className={css.button} type="button" onClick={()=>{dispatch(showModal())}}>Edit</button>
        </div>
        {/* {showDaily ? 
                <Modal>
                  <DailyNormaModal/>
                </Modal>
              : null} */}
    </div>
  )
}
