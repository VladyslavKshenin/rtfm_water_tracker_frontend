import { useDispatch } from 'react-redux'
import { dailyNormaModal } from 'store/modal/modalSlice'

import DailyNormalModalForm from '../DailyNormalModalForm/DailyNormalModalForm'
import { Svg } from 'components/Icons/Icons'
import css from './DailyNormaModal.module.css'

const DailyNormaModal = () => {

    const dispatch = useDispatch()
    
  return (
    <div className={css.wrapp}>
        <h2 className={css.title}>My daily norma</h2>
        <button type="button" className={css.buttonClose} onClick={()=>{dispatch(dailyNormaModal())}}>
            <Svg id={"#close"} width={24} height={24}/>
        </button>
        <ul className={css.list}>
            <li className={css.item}>
                <p className={css.description}>For girl: <span className={css.formula}>V=(M*0,03) + (T*0,4)</span></p>
            </li>
            <li className={css.item}>
                <p className={css.description}>For man: <span className={css.formula}>V=(M*0,04) + (T*0,6)</span></p>
            </li>
        </ul>
        <div className={css.wrappText}>
            <p className={css.text}>
                * V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)
            </p>
        </div>
        <DailyNormalModalForm/>
    </div>
  )
}

export default DailyNormaModal