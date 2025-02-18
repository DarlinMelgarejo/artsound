import { artists }  from "../data/artists.json" 

import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet-async"

import { Header } from "../components/Header"
import { Banner } from "../components/Banner"
import { Section } from "../components/Section"
import { SongList } from "../components/SongList"
import { Footer } from "../components/Footer"
import { Card } from "../components/Card"

export const ArtistSinglePage = () => {
    const { link } = useParams()

    const artist = artists.find(artist => artist.link == link)

    return (
        <>
            <Helmet>
                <title>{artist.name} - ArtSound</title>
            </Helmet>
            <Header transparent/>
            <Banner
                artist
                title={artist.name}
                image={artist.image}
                alt_image={artist.alt_image}
            />
            <Section
                title="Biografía"
                description={artist.description}
            />
            <Section
                title="Datos Curiosos"
            >
                <div className="flex flex-wrap gap-2">
                    {
                        artist.curious_facts.map((curiosity, index) => (
                            <Card
                                key={index}
                                special
                                title={curiosity.title}
                                description={curiosity.description}
                            />
                        ))
                    }   
                </div>
            </Section>
            <Section
                title="Canciones Destacadas"
            >
                <SongList
                    songs={artist.songs}
                />
            </Section>
            <Footer/>
        </>
    )
}