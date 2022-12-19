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
                        { buttons.map ( ({id,text}) =>
                            <a key={id} href="" className="Info-link">{text}</a>
                        ) }
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

