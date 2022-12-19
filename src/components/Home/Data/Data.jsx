import './Data.scss'

export const Data = () => {

    const data = [
        {
            id:0,
            title: 'ETH PRICE (USD)',
            description: `The latest price for 1 ether. You can buy as little as 0.000000000000000001 - you don't need to buy 1 whole ETH.`,
            number: `$1,177`
        },
        {
            id:1,
            title: 'TRANSACTIONS TODAY',
            description: `The number of transactions successfully processed on the network in the last 24 hours`,
            number: `916.8K`
        },
        {
            id:2,
            title: 'VALUE LOCKED IN DEFI (USD)',
            description: `The amount of money in decentralized finance (DeFi) applications, the Ethereum digital economy.`,
            number: `$38.38B`
        },
        {
            id:3,
            title: 'NODES',
            description: `Ethereum is run by thousands of volunteers around the globe, known as nodes.`,
            number: `10,010`
        }
    ]

    return (
        <div className="Data">
            <h2 className="Data-title">Ethereum today</h2>
            <p>The latest network statistics</p>
            <div className="Data-grid">
                { data.map ( ({id,title,description,number}) => 
                    <div key={id} className="Data-item">
                        <span className="Item-title">{title}</span>
                        <p className="Item-description">{description}</p>
                        <span className="Item-number">{number}</span>
                        <div className="Item-select">
                            <button className="Select-button">30d</button>
                            <button className="Select-button">90d</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}