import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const CarouselItem = ({ image, alt_image, title, link, isActive }) => (
    <div className={`carousel__item ${isActive ? 'active' : ''}`}>
        <figure className="carousel__item-figure">
            <img className="carousel__item-image" src={image} alt={alt_image} />
            <figcaption className="carousel__item-content">
                <h3 className="carousel__item-title">{title}</h3>
                <Link className="btn-special" to={link}>Ver información</Link>
            </figcaption>
        </figure>
    </div>
);

CarouselItem.propTypes = {
    image: PropTypes.string.isRequired,
    alt_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired
};
