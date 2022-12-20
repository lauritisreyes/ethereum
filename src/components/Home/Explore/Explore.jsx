import { SmallCard } from '../../Common/Cards/Cards'
import './Explore.scss'

export const Explore = () => {

    const cards = [
        { id:0, title:'Level Up your upgrade knowledge', paragraph:'The Ethereum roadmap consists of interconnected upgrades designed to make the network more scalable, secure, and sustainable.', image:'MergeImage'},
        { id:1, title:'Ethereum for enterprise', paragraph:'See how Ethereum can open up new business models, reduce your costs and future-proof your business.', image:'InfrastructureImage'},
        { id:2, title:'The Ethereum Community', paragraph:`Ethereum is all about community. It's made up of people from all different backgrounds and interests. See how you can join in.`, image:'EnterpriseImage'},
    ]

    return (
        <div className="Explore-container Wrapper">
            <h2 className="Explore-title">Explore Ethereum.org</h2>
            <ul className="Explore-cards">
                {cards.map ( (cards) =>
                    <SmallCard {...cards} key={cards.id}/>
                ) }
            </ul>
        </div>
    )
}
