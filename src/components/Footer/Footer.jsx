import { SocialContainer } from '../Common/Icons/Icons'
import './Footer.scss'


export const Footer = () => {


    const social = [
        { id:0, name:'GitHub'},
        { id:1, name:'Twitter'},
        { id:2, name:'Youtube'},
        { id:3, name:'Reddit'}
    ]



    const categories = [
        { id:0, name:'Use Ethereum', links:'useEth'},
        { id:1, name:'Learn', links:'learn'},
        { id:2, name:'Developers', links:'developers'},
        { id:3, name:'Ecosystem', links:'ecosystem'},
        { id:4, name:'Enterprise', links:'enterprise'},
        { id:5, name:'About ethereum.org', links:'about'},

    ]

    const useEth = [
        { id:0, text:'Find wallet'},
        { id:1, text:'Get ETH'},
        { id:2, text:'Decentralized applications (dapps)'},
        { id:3, text:'Layer 2'},
        { id:4, text:'Run a node'},
        { id:5, text:'Stablecoins'},
        { id:6, text:'Stake ETH'}
    ]

    const learn = [
        { id:0, text:'What is Ethereum?'},
        { id:1, text:'What is ether (ETH)?'},
        { id:2, text:'Ethereum wallets'},
        { id:3, text:'Community guides and resources'},
        { id:4, text:'History of Ethereum'},
        { id:5, text:'Ethereum Whitepaper'},
        { id:6, text:'Ethereum upgrades'},
        { id:7, text:'Ethereum security and scam prevention'},
        { id:8, text:'Ethereum glossary'},
        { id:9, text:'Ethereum governance'},
        { id:10, text:'Blockchain bridges'},
        { id:11, text:'Zero-knowledge proofs'},
        { id:12, text:'Ethereum energy consumption'},
        { id:13, text:'What is Web3?'},
        { id:14, text:'Ethereum Improvement Proposals'}
    ]

    const developers = [
        { id:0, text:'Get started'},
        { id:1, text:'Documentation'},
        { id:2, text:'Tutorials'},
        { id:3, text:'Learn by coding'},
        { id:4, text:'Set up local environment'}
    ]

    const ecosystem = [
        { id:0, text:'Community hub'},
        { id:1, text:'Ethereum Foundation'},
        { id:2, text:'Ethereum Foundation Blog'},
        { id:3, text:'Ecosystem Support Program'},
        { id:4, text:'Ethereum bug bounty program'},
        { id:5, text:'Ecosystem Grant Programs'},
        { id:6, text:'Ethereum brand assets'},
        { id:7, text:'Devcon'}
    ]

    const enterprise = [
        { id:0, text:'Mainnet Ethereum'},
        { id:1, text:'Private Ethereum'},
        { id:2, text:'Enterprise'}
    ]

    const about = [
        { id:0, text:'About us'},
        { id:1, text:'Jobs'},
        { id:2, text:'Contributing'},
        { id:3, text:'Language support'},
        { id:4, text:'Privacy policy'},
        { id:5, text:'Terms of use'},
        { id:6, text:'Cookie policy'},
        { id:7, text:'Contact'}
    ]


    return (
        <div className="Footer">
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
                <ul className="Footer-categories">
                    <span className="Categories-title">Use Ethereum</span>
                    { useEth.map ( ({id, text}) => 
                            <li key={id} className="Categories-li">
                                <a className='Categories-link' href="">{text}</a>
                            </li>
                    )}
                </ul>
                <ul className="Footer-categories">
                    <span className="Categories-title">Learn</span>
                    { learn.map ( ({id, text}) => 
                            <li key={id} className="Categories-li" >
                                <a className='Categories-link' href="">{text}</a>
                            </li>
                    )}
                </ul>
                <ul className="Footer-categories">
                    <span className="Categories-title">Developers</span>
                    { developers.map ( ({id, text}) => 
                            <li key={id} className="Categories-li">
                                <a className='Categories-link' href="">{text}</a>
                            </li>
                    )}
                </ul>
                <ul className="Footer-categories">
                    <span className="Categories-title">Ecosystem</span>
                    { ecosystem.map ( ({id, text}) => 
                            <li key={id} className="Categories-li">
                                <a className='Categories-link' href="">{text}</a>
                            </li>
                    )}
                </ul>
                <ul className="Footer-categories">
                    <span className="Categories-title">Enterprise</span>
                    { enterprise.map ( ({id, text}) => 
                            <li key={id} className="Categories-li">
                                <a className='Categories-link' href="">{text}</a>
                            </li>
                    )}
                </ul>
                <ul className="Footer-categories">
                    <span className="Categories-title">About ethereum.org</span>
                    { about.map ( ({id, text}) => 
                            <li key={id} className="Categories-li">
                                <a className='Categories-link' href="">{text}</a>
                            </li>
                    )}
                </ul>
                {/* { categories.map ( ( {id, name, links} ) => 
                    <ul key={id} className="Footer-categories">
                        <span className="Categories-title">{name}</span>
                        { {links}.map ( ({id, text}) => 
                                <li key={id} className="Categories-li">
                                    <a className='Categories-link' href="">{text}</a>
                                </li>
                        )}
                    </ul>
                )} */}
            </div>
        </div>
    )
}


