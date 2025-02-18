import PropTypes from "prop-types"
import { useState } from "react"
import { LeftArrowIcon, RightArrowIcon } from "./Icons"
import { CarouselItem } from "./CarouselItem"

export const Carousel = ({ items }) => {
    const [currentArtist, setCurrentArtist] = useState(0)

    function handlePrevClick() {
        console.log(currentArtist)
        setCurrentArtist((prevImage) => (prevImage - 1 + items.length) % items.length)
    }
    
    function handleNextClick() {
        console.log(currentArtist)
        setCurrentArtist((prevImage) => (prevImage + 1) % items.length)
    }

    return (
        <div className="carousel">
            <div className="carousel__inner">
                {
                    items.map((item, index) => (
                        <CarouselItem
                            key={index}
                            image={item.image}
                            alt_image={item.alt_image}
                            title={item.name}
                            link={`/artistas/${item.link}`}
                            isActive={index === currentArtist}
                        />
                    ))
                }
            </div>
            <button className="carousel__arrow prev" onClick={handlePrevClick}>
                <LeftArrowIcon />
            </button>
            <button className="carousel__arrow next" onClick={handleNextClick}>
                <RightArrowIcon />
            </button>
        </div>
    )
}

Carousel.propTypes = {
    items: PropTypes.array.isRequired
}