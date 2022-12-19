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

            { image==='FinanceImage' && <FinanceImage/>}
            
        </div>
    )
}

// Header Image

const HeaderImage = () => {
    return (
        <img className="Image-EthUniverse" src="/assets/header/hero.webp" alt="" />
    )
}

// Start Images


const HackathonImage = () => {
    return (
        <img src="/assets/start/hackathon_transparent.webp" alt="" />
    )
}

const DevelopersImage = () => {
    return (
        <img src="/assets/start/developers-eth-blocks.webp" alt="" />
    )
}

const DogeImage = () => {
    return (
        <img src="/assets/start/doge-computer.webp" alt="" />
    )
}

const EthImage = () => {
    return (
        <img src="/assets/start/eth.webp" alt="" />
    )
}

const WalletImage = () => {
    return (
        <img src="/assets/start/wallet-cropped.webp" alt="" />
    )
}



// Details Images 

const FutureImage = () => {
    return (
        <img src="/assets/details/future_transparent.webp" alt="" />
    )
}

const ImpactImage = () => {
    return (
        <img src="/assets/details/impact_transparent.webp" alt="" />
    )
}

const InfrastructureImage = () => {
    return (
        <img src="/assets/details/infrastructure_transparent.webp" alt="" />
    )
}

const WhatImage = () => {
    return (
        <img src="/assets/details/what-is-ethereum.webp" alt="" />
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
                <IconContainer name='Developer'/>
            </div>
            <div className="Panel-cells">
                <ul className="Cells-ul">
                    { data.map ( ({id, title, description}) => 
                        <li className="Cells-li" key={id}>
                            <a className="Cells-link" href="">
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
        <img src="/assets/details/what-is-ethereum.webp" alt="" />
    )
}

const MergeImage = () => {
    return (
        <img src="/assets/explore/merge.webp" alt=""/>
    )
}

// Contribute


const FinanceImage = () => {
    return (
        <img src="/assets/contribute/finance_transparent.webp" alt=""/>
    )
}







