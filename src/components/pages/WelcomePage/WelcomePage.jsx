import { Svg } from 'components/Icons/Icons'
import { useNavigate } from 'react-router-dom'
import styles from './WelcomePage.module.css'



const WelcomePage = () => {

  const navigate = useNavigate()

  const handleravigate =()=>{
    navigate('/signup')
  }

  return (
    <section className={styles.section}>
      <div className="container">
       <div className={styles.desktop}>
        <div className={styles.secondContainer}>
          <h1 className={styles.title}>Water consumption tracker</h1>
          <h2 className={styles.subtitle}>Record daily water intake and track</h2>
          <figure className={styles.trackerCont}>
            <figcaption className={styles.benefits}>Tracker Benefits</figcaption>
            <ul className={styles.listBenefits}>
              <li className={styles.itemBenefits}>
                <Svg className={styles.icon} id={"#benefits-1"} width={32} height={32}/>
                <p className={styles.description}>Habit drive</p>
              </li>
              <li className={styles.itemBenefits}>
               <Svg className={styles.icon} id={"#benefits-2"} width={32} height={32}/>
                <p className={styles.description}>View statistics</p>
              </li>
              <li className={styles.itemBenefits}> 
                <Svg className={styles.icon} id={"#benefits-3"} width={32} height={32}/>
                <p className={styles.description}>Personal rate setting</p>
              </li>
            </ul>
          </figure>
          <button className={styles.tryTrackerBtn} type="button" onClick={handleravigate}>Try tracker</button>
        </div>
        <div>
          <figure className={styles.whyDrinkCont}>
            <figcaption className={styles.whyDrink}>Why drink water</figcaption>
            <ul className={styles.listReasons}>
              <li className={styles.itemReasons}> Supply of nutrients to all organs</li>
              <li className={styles.itemReasons}> Providing oxygen to the lungs</li>
              <li className={styles.itemReasons}> Maintaining the work of the heart</li>
              <li className={styles.itemReasons}> Release of processed substances</li>
              <li className={styles.itemReasons}> Ensuring the stability of the internal environment</li>
              <li className={styles.itemReasons}> Maintaining within the normal temperature</li>
              <li className={styles.itemReasons}> Maintaining an immune system capable of resisting disease</li>
            </ul>
          </figure>
          </div>
          </div>
      </div> 
    </section>
  )
}

export default WelcomePage