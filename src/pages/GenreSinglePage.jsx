import { genres }  from "../data/genres.json" 
import { artists }  from "../data/artists.json" 

import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet-async"

import { Header } from "../components/Header"
import { Section } from "../components/Section"
import { Card } from "../components/Card"
import { Footer } from "../components/Footer"
import { Banner } from "../components/Banner"

export const GenreSinglePage = () => {
    const { link } = useParams()

    const genre = genres.find(genre => genre.link == link)
    const featured_artist = artists.find(artist => artist.link == genre.featured_artist)


    return (
        <>
            <Helmet>
                <title>{genre.title} - ArtSound</title>
            </Helmet>
            <Header/>
            <Banner
                wave
                title={genre.title}
            />
            <Section
                title="Historia"
                description={genre.hystory}
            />
            <Section
                title="Características Musicales"
            >
                <div className="grid gap-2 grid-cols-s-2 grid-cols-l-4">
                    {
                        genre.characteristics.map((characteristic, index) => (
                            <Card
                                key={index}
                                special
                                title={characteristic.title}
                                description={characteristic.description}
                            />
                        ))
                    }   
                </div>
            </Section>
            <Section
                title="Impacto Cultural y Social"
                description={genre.impact}
            />
            <Section
                title="Artista Destacado"
            >
                <div className="width-s-75 width-l-50">
                    <Card
                        image={featured_artist.image}
                        alt_image={featured_artist.alt_image}
                        title={featured_artist.name}
                        description={featured_artist.description.slice(0, 400) + "..."}
                        link={`/artistas/${featured_artist.link}`}
                    />
                </div>
            </Section>
            <Section
                title="Datos Curiosos"
            >
                <div className="grid gap-2 grid-cols-s-2 grid-cols-l-3">
                    {
                        genre.curious_facts.map((curiosity, index) => (
                            <Card
                                key={index}
                                special
                                description={curiosity}
                            />
                        ))
                    }   
                </div>
            </Section>
            <Footer/>
        </>
    )
}