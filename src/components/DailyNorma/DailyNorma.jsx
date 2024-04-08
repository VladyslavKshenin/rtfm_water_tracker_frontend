import DailyNormaModal from "components/DailyNormaModal/DailyNormaModal"
import { useDispatch, useSelector } from "react-redux"
import Modal from "components/Modal/Modal"
import css from "./DailyNorma.module.css"
import { dailyNormaModalSelector } from "store/modal/modalSelector"
import { dailyNormaModal } from "store/modal/modalSlice"

export const DailyNorma = () => {

  const dispatch = useDispatch()  
  const dailyNormaClose = useSelector(dailyNormaModalSelector)

  const onClose = () => {
    dispatch(dailyNormaModal())
  }

    
  return (
    <div className={css.position}>
        <h3 className={css.title}>My daily norma</h3>
        <div className={css.flex}>
            <p className={css.desc}><strong>1.5 L</strong></p>
            <button className={css.button} type="button" onClick={()=>{dispatch(dailyNormaModal())}}>Edit</button>
        </div>
        {dailyNormaClose  ? <Modal active={dailyNormaClose} onClose={onClose}>
                              <DailyNormaModal/>
                            </Modal>
                          : null}
    </div>
  )
}
