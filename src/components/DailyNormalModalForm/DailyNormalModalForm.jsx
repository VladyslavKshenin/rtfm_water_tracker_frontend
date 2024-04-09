import { useDispatch } from "react-redux"
import { useState } from 'react'
import { updateWaterRateThunk } from "store/waterRate/waterRateThunk"
import { dailyNormaModal } from "store/modal/modalSlice"
import css from "./DailyNormalModalForm.module.css"

const DailyNormalModalForm = () => {
  const [gender, setGender] = useState('female')
  const [weight, setWeight] = useState('')
  const [time, setTime]= useState('')
  const [waterRate, setWaterRate] = useState('')

  const dispatch = useDispatch()

  function handlerChange({ target: { value, name } }) {
    switch (name) {
      case 'gender': setGender(value)
        break

      case 'weight': setWeight(value)
        break

      case 'time': setTime(value)
        break

      case 'waterRate': setWaterRate(value)
        break

      default:
        return
    }
  }

let waterCalculation

switch (gender) {
  case 'female': waterCalculation = (weight*0.03 + time*0.4)
    break;

  case 'male':  waterCalculation = (weight*0.04 + time*0.6)
    break;

  default:
    return
}

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (waterRate) {
      const body = waterRate*1000
      dispatch(updateWaterRateThunk({waterRate: body}))
        .unwrap()
        .then(() => {
          dispatch(dailyNormaModal())
        })
        .catch(error => {
          alert('Maximum amount of your daily normal is 15L');
        });
    } else {
      const body = waterCalculation*1000
      dispatch(updateWaterRateThunk({waterRate: body}))
        .unwrap()
        .then(() => {
          dispatch(dailyNormaModal())
        })
        .catch(error => {
          alert('Maximum amount of your daily normal is 15L');
        });
    }
 
  }

  return (
    <form action="Water rate" className={css.form} onSubmit={handleSubmit}>
      <h3 className={css.title}>Calculate your rate</h3>
      <fieldset className={css.wrappGender}>
      <label className={css.label} htmlFor="gender">
             <input className={css.genderInput}
                type="radio" 
                id="gender"
                value="female"
                name="gender"
                checked={gender === "female"}
                onChange={handlerChange}/>
            For woman
          </label>
          <label className={css.label} htmlFor="gender">
            <input className={css.genderInput} 
                type="radio" 
                id="gender"
                value="male" 
                name="gender"
                checked={gender === "male"}
                onChange={handlerChange}/>
            For man
          </label>
      </fieldset>
           
        <div className={css.userInfo}> 
        <label className={css.label} htmlFor="weight">
          Your weight in kilograms:
        </label>
        <input className={css.input}
            type="text"
            id="weight"
            placeholder="0"
            name="weight"
            value={weight}
            onChange={handlerChange}/>
        </div>
        
        <div className={css.userInfo}>
        <label className={css.label} htmlFor="time">
            The time of active participation in sports or other activities with a high physical. Load in hours:
        </label>  
        <input className={css.input}
            type="text"
            id="time"
            placeholder="0"
            value={time}
            name="time"
            onChange={handlerChange}/>
        </div>
        
        <fieldset className={css.result}>
          <p className={css.resultText}>The required amount of water in liters per day:</p>
          <p className={css.resultColor}>{waterCalculation.toFixed(2)}</p>
        </fieldset>
          
          <fieldset className={css.waterRateWrapp}>
            <label className={css.waterRate} htmlFor="water">Write down how much water you will drink:</label>
            <input className={css.input}
              type="text" 
              name="waterRate" 
              id="water" 
              placeholder="0"
              value={waterRate} 
              onChange={handlerChange} 
              min={0} 
              max={15}/>
          </fieldset>

        <button className={css.button} type="submit">Save</button>
      </form>
  )
}

export default DailyNormalModalForm



// const DailyNormalModalForm = () => {

//   // const dispatch = useDispatch()
   
//     const { register, handleSubmit } = useForm({
//       defaultValues: {
//         gender: 'female',
//         weight: '',
//         time: ''
//       },  
//       mode: "onChange"
//     });

//     const onSubmit =(data) => {
//       console.log('data', data)
//       alert(JSON.stringify(data))
//     }


//   return (
//     <form action="Water rate" onSubmit={handleSubmit(onSubmit)}>
//       <h2>Calculate your rate</h2>

//       <label htmlFor="gender">
//         <input 
//             type="radio" 
//             id="gender"
//             value="female" 
//             {...register("gender")}/>
//         For woman
//       </label>
//       <label htmlFor="gender">
//         <input 
//             type="radio" 
//             id="gender"
//             value="male" 
//             {...register("gender")}/>
//         For man
//       </label>

//       <label htmlFor="weight">
//         Your weight in kilograms:
//         <input 
//             type="text"
//             id="weight"
//             placeholder="0"
//             {...register("weight", {
//               min: {
//                 value: 0,
//                 message: "Body weight cannot be a negative value."
//               }
//             })}/>
//       </label>

//       <label htmlFor="time">
//         The time of active participation in sports or other activities with a high physical. Load in hours:
//         <input 
//             type="text"
//             id="time"
//             placeholder="0"
//             {...register("time")}/>
//       </label>
      
//     <button type="submit">Save</button>
//     </form>
//   )
// }

// export default DailyNormalModalForm
