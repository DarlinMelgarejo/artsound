import { useEffect, useState } from "react"
import { artists } from "../data/artists.json"
import { Slider } from "./Slider"
import { SliderItem } from "./SliderItem"

export const MusicalArtists = () => {
    const [currentArtists, setCurrentArtist] = useState([])
    const [currentGenre, setCurrentGenre] = useState("Electrónica")

    
    useEffect(() => {
        const artistsFiltered = artists.filter(artist => artist.genre == currentGenre)
        setCurrentArtist(artistsFiltered)
    }, [currentGenre])

    return (
        <div className="flex flex-column grid-l gap-2 grid-cols-10 width-100">
            <div className="grid-column-2 flex flex-wrap flex-row content-center flex-column-l gap-2">
                <button className="btn-special" onClick={() => setCurrentGenre("Electrónica")}>Electrónica</button>
                <button className="btn-special" onClick={() => setCurrentGenre("Pop")}>Pop</button>
                <button className="btn-special" onClick={() => setCurrentGenre("K-Pop")}>K-Pop</button>
                <button className="btn-special" onClick={() => setCurrentGenre("Rap")}>Rap</button>
                <button className="btn-special" onClick={() => setCurrentGenre("Rock")}>Rock</button>
                <button className="btn-special" onClick={() => setCurrentGenre("Alternativo")}>Alternativo</button>
            </div>
            <div className="grid-column-8 flex items-center">
                <Slider sliderClass="slider__images">
                    {
                        currentArtists.map((artist, index) => (
                            <SliderItem
                                key={index}
                                image={artist.image}
                                alt_image={artist.alt_image}
                                title={artist.name}
                                link={`/artistas/${artist.link}`}
                            />
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}