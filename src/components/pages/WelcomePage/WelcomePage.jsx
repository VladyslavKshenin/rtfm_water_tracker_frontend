import { Svg } from 'components/Icons/Icons'

import { useNavigate } from 'react-router-dom'


const WelcomePage = () => {

  const navigate = useNavigate()

  const handleravigate =()=>{
    navigate('/signup')
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
                <Svg id={"#logo"} width={32} height={32}/>
                <p>Habit drive</p>
              </li>
              <li>
                  <Svg id={"#benefits-2"} width={32} height={32}/>
                <p>View statistics</p>
              </li>
              <li>
                  <Svg id="#benefits-3" width={32} height={32}/>
            
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