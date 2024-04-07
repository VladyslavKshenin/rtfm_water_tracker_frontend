import React from 'react'
import { useDispatch,useSelector} from "react-redux"
import { getWaterTodayThunk } from '../../store/water/waterThunk';
import { waterSelector } from 'store/water/waterSelector';

//import css from "./Today.module.css"

const Today = () => {
    const dispatch = useDispatch();
   // dispatch(getWaterTodayThunk())
   const data = useSelector(waterSelector); 
    const handleChange=(e)=>{
        dispatch(getWaterTodayThunk())
        console.log(data)
    }

/*     useEffect(()=>{ dispatch(
        getWaterToday()
      )
        .unwrap()
        .then((data) => {
           console.log(data)
        })
        .catch(() => alert('Введенні почта або пароль не є вірними!'));},[]) */
/*     dispatch(
        getWaterToday()
      )
        .unwrap()
        .then((data) => {
           console.log(data)
        })
        .catch(() => alert('Введенні почта або пароль не є вірними!'));
 */
  return (
    <>
    <div>
    <h2>Today</h2>
    <button onClick={handleChange}>asdasdasd</button>
    <ul>

    </ul>
    </div>
    </>
  )
}

export default Today