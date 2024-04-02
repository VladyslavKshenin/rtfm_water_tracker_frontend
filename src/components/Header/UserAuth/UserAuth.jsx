import Icons from '../../../images/icons.svg'
import styles from './UserAuth.module.css'

export const UserAuth = () => {
    return (
        <div className={styles.cont}>
            <p className={styles.description}>Sign in</p>
            <svg width="28" height="28">

                <use href={Icons + '#user'}></use>

            </svg>





        </div>
    )
}
