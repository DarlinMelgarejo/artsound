import PropTypes from "prop-types"
import { Link } from "react-router-dom"

export const SliderItem = ({ image, alt_image, title, link}) => (
    <div className="slider__item">
        <figure className="slider__item-figure">
            <img className="slider__item-image" src={image} alt={alt_image}/>
            <figcaption className="slider__item-content">
                <h3 className="slider__item-title">{title}</h3>
                <Link className="btn-special" to={link}>Más información</Link>
            </figcaption>
        </figure>
    </div>
)

SliderItem.propTypes = {
    image: PropTypes.string.isRequired,
    alt_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}