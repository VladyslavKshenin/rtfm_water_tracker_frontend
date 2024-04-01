import DailyNormaModal from "components/DailyNormaModal/DailyNormaModal"
import Modal from "components/Modal/Modal"

export const DailyNorma = () => {
    

  return (
    <div>
        <h3>My daily norma</h3>
        <div>
            <p><strong>2 L</strong></p>
            <button type="button">Edit</button>
        </div>
        <Modal>
            <DailyNormaModal/>
        </Modal>
    </div>
  )
}
