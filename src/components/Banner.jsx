import PropTypes from "prop-types"
import { Wave } from "./Wave"

export const Banner = ({ wave, artist, title, description, image, alt_image }) => (
    <div className={`main-banner ${artist && 'artist'}`}>
        {
            (image && alt_image) && (<img src={image} alt={alt_image} className="main-banner__image" />)
        }
        <div className="main-banner__content">
            {
                wave && (<Wave/>)
            }
            {
                title && (<h1 className="main-banner__title">{title}</h1>)
            }
            {
                description && (<p className="main-banner__descripcion">{description}</p>)
            }
        </div>
    </div>
)

Banner.propTypes = {
    wave: PropTypes.bool,
    artist: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    alt_image: PropTypes.string
}