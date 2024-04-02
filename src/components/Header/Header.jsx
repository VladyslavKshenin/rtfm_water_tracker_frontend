import { Svg } from 'components/Icons/Icons'
import { Link } from 'react-router-dom'
import css from "./Header.module.css"

export const Header = () => {

  //Для спан-юзера зроби бордер 
  // <span>
  // <Svg id="#user" width={14} height={18}/>    
  // </span>
  return (
    <header>
      <div className='container'>
        <nav className={css.nav}>
          <ul className={css.list}>
            <li>
              <Link to="/welcome">
                <Svg id="#logo" width={102} height={48}/> 
              </Link>
            </li>
            <li>
              <Link to="/signin" className={css.link}>
                <span>Sign In</span> 
                <span className={css.svg}>
                  <Svg id="#user" width={18} height={24}/>    
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
