import DailyNormaModal from "components/DailyNormaModal/DailyNormaModal"
import Modal from "components/Modal/Modal"
import { useDispatch, useSelector } from "react-redux"
import { showModalSelector } from "store/modal/modalSelector"
import { showModal } from "store/modal/modalSlice"

export const DailyNorma = () => {

    const show = useSelector(showModalSelector)
    const distpath = useDispatch()
    console.log('first', show)
  return (
    <div>
        <h3>My daily norma</h3>
        <div>
            <p><strong>2 L</strong></p>
            <button type="button" onClick={()=>{distpath(showModal())}}>Edit</button>
        </div>
        {show ? <Modal>
                    <DailyNormaModal/>
                  </Modal>
                : null}
    </div>
  )
}
