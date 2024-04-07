// import { useDispatch } from "react-redux"
import { useState } from 'react'
// import { updateWaterRateThunk } from "store/waterRate/waterRateThunk"
// import { updateWaterRateThunk } from "store/waterRate/waterRateThunk"
// import css from "./DailyNormalModalForm.module.css"

const DailyNormalModalForm = () => {
  const [gender, setGender] = useState('female')
  const [weight, setWeight] = useState('')
  const [time, setTime]= useState('')
  const [waterRate, setWaterRate] = useState('')

  // const dispatch = useDispatch()

  const handlerChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'gender': setGender(value)
        break;
      
      case 'weight': setWeight(value)
        break;

      case 'time': setTime(value)
        break;
      
      case 'waterRate': setWaterRate(value)
        break;

      default:
        return;
    }
  }

  console.log('waterRate', waterRate)

let waterCalculation

switch (gender) {
  case 'female': waterCalculation = weight*0.03 + time*0.4
    break;

  case 'male':  waterCalculation = (weight*0.04) + (time*0.6)
    break;

  default:
    return
}




  const handleSubmit = (e) => {
    e.preventDefault();
    
  if (waterRate) {
    const body = waterRate
    console.log('first', body)
    return body
  } else {
    const body = waterCalculation
    console.log('first', body)
    return body
  }
  // console.log('first', body)
    
  //   dispatch(updateWaterRateThunk(body))
  }

  return (
    <form action="Water rate" onSubmit={handleSubmit}>
      <h2>Calculate your rate</h2>
           <label htmlFor="gender">
             <input
                type="radio" 
                id="gender"
                value="female"
                name="gender"
                checked={gender === "female"}
                onChange={handlerChange}/>
            For woman
          </label>
          <label htmlFor="gender">
            <input 
                type="radio" 
                id="gender"
                value="male" 
                name="gender"
                checked={gender === "male"}
                onChange={handlerChange}/>
            For man
          </label>
    
          <label htmlFor="weight">
            Your weight in kilograms:
            <input 
                type="text"
                id="weight"
                placeholder="0"
                name="weight"
                value={weight}
                onChange={handlerChange}/>
          </label>
    
          <label htmlFor="time">
            The time of active participation in sports or other activities with a high physical. Load in hours:
            <input 
                type="text"
                id="time"
                placeholder="0"
                value={time}
                name="time"
                onChange={handlerChange}/>
          </label>
          
          <p htmlFor="">The required amount of water in liters per day:</p>
          <p>{waterCalculation}</p>

          <label htmlFor="water">Write down how much water you will drink:</label>
          <input type="text" name="waterRate" id="water " value={waterRate} onChange={handlerChange}/>

        <button type="submit">Save</button>
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
