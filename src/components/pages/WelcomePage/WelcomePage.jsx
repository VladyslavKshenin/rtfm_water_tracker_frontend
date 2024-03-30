
import { ReactComponent as Calendar} from 'images/benefits-1.svg'
import { ReactComponent as Statistics} from 'images/benefits-2.svg'
import { ReactComponent as PersonalRateSetting} from 'images/benefits-3.svg'

import { useLocation, useNavigate } from 'react-router-dom'


const WelcomePage = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleravigate =()=>{
    navigate(location.state??'/signup')
  }

  return (
    <section>
      <div className="container">
        <div>
          <h1>Water consumption tracker</h1>
          <h2>Record daily water intake and track</h2>
          <figure>
            <figcaption>Tracker Benefits</figcaption>
            <ul>
              <li>
                <Calendar width={32} height={32}/>
                <p>Habit drive</p>
              </li>
              <li>
                <Statistics width={32} height={32}/>
                <p>View statistics</p>
              </li>
              <li>
                <PersonalRateSetting width={32} height={32}/>
                <p>Personal rate setting</p>
              </li>
            </ul>
          </figure>
          <button type="button" onClick={handleravigate}>Try tracker</button>
        </div>
        <div>
          <figure>
            <figcaption>Why drink water</figcaption>
            <ul>
              <li>Supply of nutrients to all organs  </li>
              <li>Providing oxygen to the lungs</li>
              <li>Maintaining the work of the heart</li>
              <li>Release of processed substances</li>
              <li>Ensuring the stability of the internal environment</li>
              <li>Maintaining within the normal temperature</li>
              <li>Maintaining an immune system capable of resisting disease</li>
            </ul>
          </figure>
        </div>
      </div> 
    </section>
  )
}

export default WelcomePage