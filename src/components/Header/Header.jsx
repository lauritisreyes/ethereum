
import { IconContainer } from '../Common/Icons/Icons'
import './Header.scss'


export const Header = () => {

    const sections = [
        { id:0, text:'Use Ethereum'},
        { id:1, text:'Learn'},
        { id:2, text: 'Developers'},
        { id:3, text: 'Enterprise'},
        { id:4, text: 'Community'}
    ]

    return (
        <header className="Header">
            <div className="Header-wrapper Wrapper">
                <div className="Header-left">
                    <a href="" className="Header-Logo"><Logo/></a>
                    <nav className="Header-nav">
                        <ul className="Nav-ul">
                            {sections.map ( ({id, text}) =>
                                <li key={id} className="Nav-li">
                                    <a href="" className="Nav-link">
                                        <span className="Link-text">{text}</span>
                                        <span className="Link-icon">
                                            <IconContainer name='ChevronDown'/>
                                        </span>
                                    </a>
                                </li>
                            )} 
                        </ul>
                    </nav>
                </div>
                <div className="Header-right">
                    <div className="Header-search">
                        <input className='Search-input' type="text" placeholder='Search'/>
                        <IconContainer name='Search'/>
                        <span className="Search-detail">/</span>
                    </div>
                    <button className="Header-mode"><IconContainer name='Moon'/></button>
                    <a href="" className="Header-language">
                        <IconContainer name='Earth'/>
                        <span className="Language-text">Languages</span>
                    </a>
                    <IconContainer name='Search'/>
                    <IconContainer name='Burger'/>
                </div>
            </div> 
        </header>
    )
}


const Logo = () => {
    return (
        <svg className="Header-logo" width="115" height="182" viewBox="0 0 115 182" fill="none">
            <path d="M57.5054 181V135.84L1.64064 103.171L57.5054 181Z" fill="#F0CDC2" stroke="#1616B4" strokeLinejoin="round"></path><path d="M57.6906 181V135.84L113.555 103.171L57.6906 181Z" fill="#C9B3F5" stroke="#1616B4" strokeLinejoin="round"></path><path d="M57.5055 124.615V66.9786L1 92.2811L57.5055 124.615Z" fill="#88AAF1" stroke="#1616B4" strokeLinejoin="round"></path><path d="M57.6903 124.615V66.9786L114.196 92.2811L57.6903 124.615Z" fill="#C9B3F5" stroke="#1616B4" strokeLinejoin="round"></path><path d="M114.196 92.2811L57.6906 1V66.9786L114.196 92.2811Z" fill="#B8FAF6" stroke="#1616B4" strokeLinejoin="round"></path><path d="M1.00006 92.2811L57.5054 1V66.9786L1.00006 92.2811Z" fill="#F0CDC2" stroke="#1616B4" strokeLinejoin="round"></path>
        </svg>
    )
}