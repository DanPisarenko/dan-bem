import './Footer.css'
import logo_ipsum from '../../Assets/logo.png'

export default function Footer() {
    return(
        <div className='footer'>
            <img className='footer__img' src={logo_ipsum} alt='logo'/>
            <p className='footer__creator'>2023 DanPisarenko</p>
        </div>
    )
}