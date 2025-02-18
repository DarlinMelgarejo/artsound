import PropTypes from "prop-types"

export const Section = ({ title, description, text_bold, children }) => (
    <section className="section">
        {
            title && (<h2 className="section__title">{title}</h2>)
        }
        {
            description && (
                <p className="section__description">
                    {description}
                    {
                        text_bold && (<span className="text-bold">{text_bold}</span>)
                    }
                </p>
            )
        }
        <div className="section__content">
            {
                children
            }
        </div>
    </section>
)

Section.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    text_bold: PropTypes.string,
    children: PropTypes.node
}