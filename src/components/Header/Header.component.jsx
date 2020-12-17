import { Link } from 'react-router-dom'

import './Header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'

export const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options' >
            <Link className='option' to='/shop'>Shop</Link>
            <Link className='option' to='/shop'>Contacts</Link>
        </div>
    </div>
)