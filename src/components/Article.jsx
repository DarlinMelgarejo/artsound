import PropTypes from "prop-types"

export const Article = ({ title, description, link, image, alt_image}) => (
    <article className="article">
        <div className="article__content">
            <h3 className="article__title">{title}</h3>
            <p className="article__description">{description}</p>
            <footer className="article__footer">
                <a className="btn-special" href={link}>
                    Más información
                </a>
            </footer>
        </div>
        <div className="article__image">
            <div className="article__image-background-primary">
                <img src={image} alt={alt_image} />
            </div>
        </div>
    </article>
)

Article.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt_image: PropTypes.string.isRequired
}