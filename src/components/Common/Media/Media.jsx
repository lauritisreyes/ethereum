import { IconContainer } from '../Icons/Icons'
import './Media.scss'

export const ImageContainer = ({image}) => {
    return (
        <div className="Container">

            { image==='HeaderImage' && <HeaderImage/> }

            { image==='HackathonImage' && <HackathonImage/> }
            { image==='DevelopersImage' && <DevelopersImage/> }
            { image==='DogeImage' && <DogeImage/> }
            { image==='EthImage' && <EthImage/> }
            { image==='WalletImage' && <WalletImage/> }

            { image==='FutureImage' && <FutureImage/> }
            { image==='ImpactImage' && <ImpactImage/> }
            { image==='InfrastructureImage' && <InfrastructureImage/> }
            { image==='WhatImage' && <WhatImage/> }
            { image==='PersonalizedPanel' && <PersonalizedPanel/>}

            { image==='EnterpriseImage' && <EnterpriseImage/> }
            { image==='MergeImage' && <MergeImage/> }
            { image==='Infrastructure2Image' && <Infrastructure2Image/> }

            { image==='FinanceImage' && <FinanceImage/>}
            
        </div>
    )
}

// Header Image

const HeaderImage = () => {
    return (
        <img className="HeaderImage" src="/assets/header/hero.webp" alt="An illustration of a futuristic city, representing the Ethereum ecosystem." />
    )
}

// Start Images


const HackathonImage = () => {
    return (
        <img src="/assets/start/hackathon_transparent.webp" alt="Illustration of a person working on a computer." />
    )
}

const DevelopersImage = () => {
    return (
        <img src="/assets/start/developers-eth-blocks.webp" alt="An illustration of a hand creating an ETH logo made of lego bricks." />
    )
}

const DogeImage = () => {
    return (
        <img src="/assets/start/doge-computer.webp" alt="Illustration of a doge using a computer." />
    )
}

const EthImage = () => {
    return (
        <img src="/assets/start/eth.webp" alt="Illustration of a group of people marvelling at an ether (ETH) glyph in awe." />
    )
}

const WalletImage = () => {
    return (
        <img src="/assets/start/wallet-cropped.webp" alt="Illustration of a robot with a vault for a body, representing an Ethereum wallet." />
    )
}



// Details Images 

const FutureImage = () => {
    return (
        <img src="/assets/details/future_transparent.webp" alt="Illustration of a futuristic computer set up, powered by Ethereum crystals." />
    )
}

const ImpactImage = () => {
    return (
        <img src="/assets/details/impact_transparent.webp" alt="Illustration of hands offering an ETH symbol." />
    )
}

const InfrastructureImage = () => {
    return (
        <img src="/assets/details/infrastructure_transparent.webp" alt="An Eth logo being displayed via hologram." />
    )
}

const WhatImage = () => {
    return (
        <img src="/assets/details/what-is-ethereum.webp" alt="Illustration of a person peering into a bazaar, meant to represent Ethereum." />
    )
}

const PersonalizedPanel = () => {

    const data = [
        { id:0, title:'Your own bank', description:`You can build a bank run by logic you've programmed.`},
        { id:1, title:'Your own currency', description:`You can create tokens that you can transfer and use across applications.`},
        { id:2, title:'A JavaScript Ethereum Wallet', description:`You can use existing languages to interact with Ethereum and other applications.`},
        { id:3, title:'An open, permissionless DNS', description:`You can reimagine existing services as decentralized, open applications.`}
    ]

    return (
        <div className="Panel">
            <div className="Panel-header">
                <ul className="Header-bullets">
                    <li className="Bullets-li"></li>
                    <li className="Bullets-li"></li>
                    <li className="Bullets-li"></li>
                </ul>
                <span className="Header-title">Code examples</span>
                {/* <IconContainer name='Developer'/> */}
                <div className="Header-icon">
                    <IconContainer name='Developer'/>
                </div>
            </div>
            <div className="Panel-cells">
                <ul className="Cells-ul">
                    { data.map ( ({id, title, description}) => 
                        <li className="Cells-li" key={id}>
                            <a className="Cells-link" href="#">
                                <span className="Cells-title">{title}</span>
                                <span className="Cells-description">{description}</span>
                            </a>
                        </li>
                    )}
                </ul>
            </div>
            
        </div>
    )
}


// Explore

const EnterpriseImage = () => {
    return (
        <img src="/assets/explore/enterprise-eth.webp" alt="Illustration of a group of builders working together." />
    )
}

const MergeImage = () => {
    return (
        <img src="/assets/explore/merge.webp" alt="Illustration of a spaceship representing the increased power after Ethereum upgrades."/>
    )
}

const Infrastructure2Image = () => {
    return (
        <img src="/assets/explore/infrastructure_transparent.webp" alt="Illustration of a futuristic computer/device."/>
    )
}

// Contribute


const FinanceImage = () => {
    return (
        <img className='FinanceImage' src="/assets/contribute/finance_transparent.webp" alt="An Ethereum logo made of lego bricks."/>
    )
}







