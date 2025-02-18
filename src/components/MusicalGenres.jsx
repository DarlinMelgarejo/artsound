import PropTypes from "prop-types"

export const MusicalGenres = ({ container_class, children }) => (
    <div className={container_class}>
        {children}
    </div>
)

MusicalGenres.propTypes = {
    container_class: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}