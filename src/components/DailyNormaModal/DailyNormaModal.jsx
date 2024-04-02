

import DailyNormalModalForm from '../DailyNormalModalForm/DailyNormalModalForm'
import { Svg } from 'components/Icons/Icons'
import { useDispatch, useSelector } from 'react-redux'
import { showModalSelector } from 'store/modal/modalSelector'
import { showModal } from 'store/modal/modalSlice'

const DailyNormaModal = () => {

    const show = useSelector(showModalSelector)
    console.log('second', show)
    const distpath = useDispatch()

  return (
    <>
        <h2>My daily norma</h2>
        <button type="button" onClick={()=>{distpath(showModal())}}>
            <Svg id={"#close"} width={24} height={24}/>
        </button>
        <ul>
            <li>
                <p>For girl: <span>V=(M*0,03) + (T*0,4)</span></p>
            </li>
            <li>
                <p>For man: <span>V=(M*0,04) + (T*0,6)</span></p>
            </li>
        </ul>
        <p>
            * V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)
        </p>
        <DailyNormalModalForm/>
    </>
  )
}

export default DailyNormaModal