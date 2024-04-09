import TodayListItem from "components/TodayListItem/TodayListItem"
import { useDispatch, useSelector } from "react-redux"
import { waterSelector } from "store/water/waterSelector"

const TodayList = () => {
    const waterList = useSelector(waterSelector)
    
    console.log('waterList', waterList)

  return (
    <ul>
        <TodayListItem/>
    </ul>
  )
}

export default TodayList