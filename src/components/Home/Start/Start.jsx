
import { ImageContainer } from '../../Common/Media/Media'
import './Start.scss'


export const Start = () => {

    return (
        <div className="Start">
            <Intro/>
            <Grid/>
            
        </div>
    )
}


const Intro = () => {
    return (
        <div className="Start-summary">
            <div className="Summary-info">
                <div className="Info-container">
                    <h2 className="Info-h2">Get started</h2>
                    <p className="Info-p">ethereum.org is your portal into the world of Ethereum. The tech is new and ever-evolving - it helps to have a guide. Here's what we recommend you do if you want to dive in.</p>
                </div>
            </div>
            <div className="Summary-media">
                <ImageContainer image='HackathonImage'/>
            </div>
        </div>
    )
}

const Grid = () => {

    const cards = [
        { id:0, title:'Pick a wallet', paragraph:'A wallet lets you connect to Ethereum and manage your funds', image:'WalletImage'},
        { id:1, title:'Get ETH', paragraph:'ETH is the currency of Ethereum - you can use it in applications', image:'EthImage'},
        { id:2, title:'Use a dapp', paragraph:'Dapps are applications powered by Ethereum. See what you can do.', image:'DogeImage'},
        { id:3, title:'Start building', paragraph:'If you want to start coding with Ethereum, we have documentation, tutorials and more in our developer portal', image:'DevelopersImage'},
    ]

    return (
        <div className="Start-container">
            <ul className="Start-cards">
                {cards.map ( ({id, title, paragraph, image, alt}) =>
                    <li key={id} className="Cards-li">
                        <a href="" className="Cards-link">
                            <div className="Cards-media">
                                <ImageContainer image={image}/>
                            </div>
                            <div className="Cards-info">
                                <h3 className="Info-title">{title}</h3>
                                <p className="Info-p">{paragraph}</p>
                            </div>
                        </a>
                    </li>
                ) }
             </ul>
        </div>
    )
}


