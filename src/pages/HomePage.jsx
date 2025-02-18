import { Header } from '../components/Header'
import { Banner } from "../components/Banner"
import { MusicalGenres } from "../components/MusicalGenres"
import { Section } from "../components/Section"
import { Card } from "../components/Card"

import { genres } from "../data/genres.json"
import { MusicalArtists } from '../components/MusicalArtists'
import { Footer } from '../components/Footer'

import { Helmet } from 'react-helmet-async'

export const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Inicio - ArtSound</title>
            </Helmet>
            <Header />
            <Banner
                wave
                title="ArtSound"
                description="Explora la fascinante diversidad de géneros musicales y descubre su riqueza única"
            />
            <main>
                <Section
                    title="Tu Fuente de Información Musical"
                    description="Bienvenidos a tu fuente de información musical. Aquí exploraremos la diversidad y riqueza de los géneros musicales más influyentes, desde el vibrante pop y la innovadora electrónica hasta el contagioso K-pop, el enérgico rock y el auténtico alternativo. Sumérgete en biografías de artistas destacados, descubre sus canciones más conocidas, y encuentra datos curiosos de estos artistas. "
                    text_bold="¡ÚNETE A NOSOTROS EN ESTE VIAJE SONORO Y CELEBRA LA MÚSICA EN TODAS SUS FORMAS!"
                />
                <Section title="Géneros Musicales">
                    <MusicalGenres
                        container_class="cards-container"
                    >
                        {
                            genres.map((genre) => (
                                <Card
                                    key={genre.id} 
                                    image={genre.image}
                                    alt_image={genre.alt_image}
                                    title={genre.title}
                                    subtitle={genre.subtitle}
                                    description={genre.description}
                                    link={`/generos/${genre.link}`}
                                />
                            ))
                        }
                    </MusicalGenres>
                </Section>
                <Section title="Artistas">
                    <MusicalArtists/>
                </Section>
            </main>
            <Footer/>
        </>
    )   
}
