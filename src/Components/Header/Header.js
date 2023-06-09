import './Header.css'
import logo_ipsum from '../../Assets/logo.png'

export default function Header() {
    return(
        <div className='header'>
            <img className='header__img' src={logo_ipsum} alt='logo'/>
            <nav className='header__navbar'>
                <a className='header__navbar_item' href='/'>item1</a>
                <a className='header__navbar_item' href='/'>item2</a>
                <a className='header__navbar_item' href='/'>item3</a>
                <a className='header__navbar_item' href='/'>item4</a>
            </nav>
        </div>
    )
}