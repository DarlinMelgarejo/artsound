import PropTypes from "prop-types";

export const Slider = ({ sliderClass, children }) => (
    <div className={sliderClass}>
        {
            children
        }
    </div>
)

Slider.propTypes = {
    sliderClass: PropTypes.string.isRequired,
    children: PropTypes.node
}