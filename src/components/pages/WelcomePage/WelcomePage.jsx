import { Svg } from 'components/Icons/Icons';
import { useNavigate } from 'react-router-dom';
import styles from './WelcomePage.module.css';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleravigate = () => {
    navigate('/signup');
  };

  return (
    <section className="section">
      <div className="main">
        <div className="container">
          <div className={styles.desktop}>
            <div className={styles.secondContainer}>
              <h1 className={styles.title}>Water consumption tracker</h1>
              <p className={styles.subtitle}>
                Record daily water intake and track
              </p>
              <h3 className={styles.benefits}>Tracker Benefits</h3>
              <ul className={styles.listBenefits}>
                <li className={styles.itemBenefits}>
                  <Svg
                    className={styles.icon}
                    id={'#benefits-1'}
                    width={40}
                    height={40}
                  />
                  <p className={styles.description}>Habit drive</p>
                </li>
                <li className={styles.itemBenefits}>
                  <Svg
                    className={styles.icon}
                    id={'#benefits-2'}
                    width={40}
                    height={40}
                  />
                  <p className={styles.description}>View statistics</p>
                </li>
                <li className={styles.itemBenefits}>
                  <Svg
                    className={styles.icon}
                    id={'#benefits-3'}
                    width={40}
                    height={40}
                  />
                  <p className={styles.description}>Personal rate setting</p>
                </li>
              </ul>
              <button
                className={styles.tryTrackerBtn}
                type="button"
                onClick={handleravigate}
              >
                Try tracker
              </button>
            </div>
            <div className={styles.firstContainer}>
              <div className={styles.contentContainer}>
                <h2 className={styles.whyDrink}>Why drink water</h2>

                <ul className={styles.listReasons}>
                  <li className={styles.itemReasons}>
                    {' '}
                    Supply of nutrients to all organs
                  </li>
                  <li className={styles.itemReasons}>
                    {' '}
                    Providing oxygen to the lungs
                  </li>
                  <li className={styles.itemReasons}>
                    {' '}
                    Maintaining the work of the heart
                  </li>
                  <li className={styles.itemReasons}>
                    {' '}
                    Release of processed substances
                  </li>
                  <li className={styles.itemReasons}>
                    {' '}
                    Ensuring the stability of the internal environment
                  </li>
                  <li className={styles.itemReasons}>
                    {' '}
                    Maintaining within the normal temperature
                  </li>
                  <li className={styles.itemReasons}>
                    {' '}
                    Maintaining an immune system capable of resisting disease
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomePage;
