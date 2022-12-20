import { ImageContainer } from '../../Common/Media/Media'
import './Intro.scss'


export const Intro = () => {
    return (
        <div className="Intro Wrapper">
            <div className="Intro-media">
                <ImageContainer image='HeaderImage'/>
            </div>
            <span className="Intro-h1">Ethereum</span>
            <div className="Intro-info">
                <h1 className='Info-h1'>Welcome to Ethereum</h1>
                <p className="Info-p">Ethereum is the community-run technology powering the cryptocurrency ether (ETH) and thousands of decentralized applications.</p>
                <a href="#" className="Info-link Button-secondary">Explore Ethereum</a>
            </div>
        </div>
    )
}