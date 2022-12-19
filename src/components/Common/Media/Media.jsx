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







