import PropTypes from "prop-types"
import { Link } from "react-router-dom"

export const Card = ({ special, image, alt_image, title, subtitle, description, link}) => (
    <div className={`card ${special ? 'special' : 'normal'}`}>
        {
            (image && alt_image) && (
                <div className="card__image">
                    <img src={image} alt={alt_image} />
                </div>
            )
        }
        <div className="card__content">
            {
                title && (<h5 className="card_title">{title}</h5>)
            }
            {
                subtitle && (<h6 className="card__subtitle">{subtitle}</h6>)
            }
            {
                description && (<p className="card__description">{description}</p>)
            }
            {
                link && (
                    <footer className="card__footer">
                        <Link className="btn-special" to={link}>
                            Más información
                        </Link>
                    </footer>
                )
            }
        </div>
    </div>
)

Card.propTypes = {
    special: PropTypes.bool,
    image: PropTypes.string,
    alt_image: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string
}