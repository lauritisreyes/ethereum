import { SocialContainer } from '../Common/Icons/Icons'
import './Footer.scss'


export const Footer = () => {


    const social = [
        { id:0, name:'GitHub'},
        { id:1, name:'Twitter'},
        { id:2, name:'Youtube'},
        { id:3, name:'Reddit'}
    ]

    const data = [
        {
            id:0,
            name:'Use Ethereum',
            links: [
                { id:0, text:'Find wallet', icon: false},
                { id:1, text:'Get ETH', icon: false},
                { id:2, text:'Decentralized applications (dapps)', icon: false},
                { id:3, text:'Layer 2', icon: false},
                { id:4, text:'Run a node', icon: false},
                { id:5, text:'Stablecoins', icon: false},
                { id:6, text:'Stake ETH', icon: false}
            ]
        },
        {
            id:1,
            name:'Learn',
            links: [
                { id:0, text:'What is Ethereum?', icon: false},
                { id:1, text:'What is ether (ETH)?', icon: false},
                { id:2, text:'Ethereum wallets', icon: false},
                { id:3, text:'Community guides and resources', icon: false},
                { id:4, text:'History of Ethereum', icon: false},
                { id:5, text:'Ethereum Whitepaper', icon: false},
                { id:6, text:'Ethereum upgrades', icon: false},
                { id:7, text:'Ethereum security and scam prevention', icon: false},
                { id:8, text:'Ethereum glossary', icon: false},
                { id:9, text:'Ethereum governance', icon: false},
                { id:10, text:'Blockchain bridges', icon: false},
                { id:11, text:'Zero-knowledge proofs', icon: false},
                { id:12, text:'Ethereum energy consumption', icon: false},
                { id:13, text:'What is Web3?', icon: false},
                { id:14, text:'Ethereum Improvement Proposals', icon: false}
            ]
        },
        {
            id:2,
            name:'Developers',
            links: [
                { id:0, text:'Get started', icon: false},
                { id:1, text:'Documentation', icon: false},
                { id:2, text:'Tutorials', icon: false},
                { id:3, text:'Learn by coding', icon: false},
                { id:4, text:'Set up local environment', icon: false}
            ]
        },
        {
            id:3,
            name:'Ecosystem',
            links: [
                { id:0, text:'Community hub', icon: false},
                { id:1, text:'Ethereum Foundation', icon: false},
                { id:2, text:'Ethereum Foundation Blog ↗', icon: true},
                { id:3, text:'Ecosystem Support Program ↗', icon: true},
                { id:4, text:'Ethereum bug bounty program', icon: false},
                { id:5, text:'Ecosystem Grant Programs', icon: false},
                { id:6, text:'Ethereum brand assets', icon: false},
                { id:7, text:'Devcon ↗', icon: true}
            ]
        },
        {
            id:4, 
            name:'Enterprise',
            links: [
                { id:0, text:'Mainnet Ethereum', icon: false},
                { id:1, text:'Private Ethereum', icon: false},
                { id:2, text:'Enterprise', icon: false}
            ]
        },
        {
            id:5,
            name:'About ethereum.org',
            links: [
                { id:0, text:'About us', icon: false},
                { id:1, text:'Jobs', icon: false},
                { id:2, text:'Contributing', icon: false},
                { id:3, text:'Language support', icon: false},
                { id:4, text:'Privacy policy', icon: false},
                { id:5, text:'Terms of use', icon: false},
                { id:6, text:'Cookie policy', icon: false},
                { id:7, text:'Contact ↗', icon: true}
            ]
        }
    ]



    return (
        <div className="Footer Wrapper">
            <div className="Footer-row">
                <span className="Footer-update">Website last updated: December 15, 2022</span>
                <ul className="Footer-social">
                    { social.map ( ( social ) => 
                    <li className='Footer-icon' key={social.id}>
                        <a href="" className='Icon-link'>
                            <SocialContainer {...social}/>
                        </a>
                    </li>
                    )}
                </ul>
            </div>
            <div className="Footer-row">
                { data.map ( ( {id, name, links} ) => 
                    <ul key={id} className="Footer-categories">
                        <span className="Categories-title">{name}</span>
                        { links.map ( ({id, text}) => 
                            <li key={id} className="Categories-li">
                                <a className='Categories-link' href="">{text}</a>
                            </li>
                        )}
                    </ul>
                )}
            </div>
        </div>
    )
}


