import { Card } from '../../Common/Cards/Cards'
import './Contribute.scss'

export const Contribute = () => {

    const details = [
        { id:0, background:'#dde6fb', title: `Contribute to ethereum.org
        `, paragraph:`This website is open source with hundreds of community contributors. You can propose edits to any of the content on this site, suggest awesome new features, or help us squash bugs.`, button1:'More on contributing', button2:'GitHub', image:'FinanceImage'},
    ]

    return (
        <div className="Contribute">
            { details.map ( (details) => 
                <Card {...details} key={details.id}/>
            )}
        </div>
    )
}