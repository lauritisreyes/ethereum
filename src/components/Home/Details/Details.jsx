import { Card } from '../../Common/Cards/Cards'
import './Details.scss'

export const Details = () => {

    const details = [
        { 
            id:0,
            background:'#ccfcff',
            title: 'What is Ethereum?',
            paragraph:`Ethereum is a technology that's home to digital money, global payments, and applications. The community has built a booming digital economy, bold new ways for creators to earn online, and so much more. It's open to everyone, wherever you are in the world - all you need is the internet.`,
            image:'WhatImage',
            buttons: [ 
                { id:0, text:'What is Ethereum', icon: false},
                { id:1, text:'More on digital money', icon: false}
            ]    
        },
        {
            id:1,
            background:'#ffe3d3',
            title: `A fairer financial system`,
            paragraph:`Today, billions of people can’t open bank accounts, others have their payments blocked. Ethereum's decentralized finance (DeFi) system never sleeps or discriminates. With just an internet connection, you can send, receive, borrow, earn interest, and even stream funds anywhere in the world.`,
            image:'ImpactImage',
            buttons: [ 
                { id:0, text:'Explore DeFi', icon: false},
            ]    
        },
        { 
            id:2,
            background:'#e1fefa',
            title: 'The internet of assets',
            paragraph:`Ethereum isn't just for digital money. Anything you can own can be represented, traded and put to use as non-fungible tokens (NFTs). You can tokenise your art and get royalties automatically every time it's re-sold. Or use a token for something you own to take out a loan. The possibilities are growing all the time.`,
            image:'InfrastructureImage',
            buttons: [ 
                { id:0, text:'More on NFTs', icon: false}
            ]
        },
        { 
            id:3,
            background:'#ffe5f9',
            title: 'An open internet',
            paragraph:`Today, we gain access to 'free' internet services by giving up control of our personal data. Ethereum services are open by default - you just need a wallet. These are free and easy to set up, controlled by you, and work without any personal info.`,
            image:'FutureImage',
            buttons: [ 
                { id:0, text:'Explore the open internet', icon: false},
                { id:1, text:'More on wallets', icon: false}
            ]  
        },
        { 
            id:4,
            background:'#e8e8ff',
            title: 'A new frontier for development',
            paragraph:`Ethereum and its apps are transparent and open source. You can fork code and re-use functionality others have already built. If you don't want to learn a new language you can just interact with open-sourced code using JavaScript and other existing languages.`, 
            image:'PersonalizedPanel',
            buttons: [ 
                { id:0, text:'Developer Portal', icon: false},
            ] 
        }
    ]

    return (
        
        <div className="Details Wrapper">
            {details.map ((details) =>
                <Card {...details} key={details.id}/>
            )}
        </div>
    )
}



