import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Svg } from 'components/Icons/Icons';
import { selectIsLoggedIn } from 'store/auth/authSelectors';

const Logo = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn) 

  return (
    <>
        {!isLoggedIn  ? <Link to="/welcome">
                            <Svg id="#logo" width={102} height={48}/> 
                        </Link>
                      : <Link to="/home">
                            <Svg id="#logo" width={102} height={48}/> 
                        </Link>}
    </>
  )
}

export default Logo