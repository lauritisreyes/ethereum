import { IconContainer } from "../Icons/Icons"
import { ImageContainer } from "../Media/Media"
import './Cards.scss'

export const Card = ({title, paragraph, buttons, image, background}) => {

    return (
        <div className="Card" style={{ backgroundColor : background }}>
            <div className="Card-media">
                <ImageContainer image={image}/>
            </div>
            <div className="Card-info">
                <div className="Info-container">
                    <h2 className="Info-title">{title}</h2>
                    <p className="Info-p">{paragraph}</p>
                    <div className="Info-buttons">
                        { buttons.map ( (buttons) =>
                            <Button key={buttons.id} {...buttons}/>
                        ) }
                    </div>
                </div>
            </div>
        </div>
    )
}

const Button = ({text, icon}) => {
    return (
        <a href="" className="Info-link">
            <div className={`Link-extra ${ icon ? 'isActive' : ''}`}>
                <IconContainer name='GitHub'/>
            </div>
            <span className="Link-text">{text}</span>
        </a>
    )
}


export const SmallCard = ({id, title, paragraph, image}) => {

    return (
        <li key={id} className="SmallCard-li">
            <a href="" className="SmallCard-link">
                <div className="SmallCard-media">
                    <ImageContainer image={image}/>
                </div>
                <div className="SmallCard-info">
                    <h3 className="Info-title">{title}</h3>
                    <p className="Info-p">{paragraph}</p>
                </div>
            </a>
        </li>
    )
}
