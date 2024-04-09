import { useDispatch, useSelector } from "react-redux"
import { waterSelector } from "store/water/waterSelector"

const TodayList = () => {
    const waterList = useSelector(waterSelector)
    
    console.log('waterList', waterList)
  return (
    <div>TodayList</div>
  )
}

export default TodayList