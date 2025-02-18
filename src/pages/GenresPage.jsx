import { Header } from '../components/Header'
import { Banner } from "../components/Banner"
import { Section } from "../components/Section"
import { MusicalGenres } from '../components/MusicalGenres'

import { genres } from "../data/genres.json"
import { Article } from '../components/Article'
import { Footer } from '../components/Footer'
import { Helmet } from 'react-helmet-async'

export const GenresPage = () => {
    return (
        <>
            <Helmet>
                <title>Generos - ArtSound</title>
            </Helmet>
            <Header />
            <Banner
                wave
                title="Géneros Musicales"
            />
            <main>
                <Section title="Géneros Musicales">
                    <MusicalGenres
                        container_class="arcticles-container"
                    >
                        {
                            genres.map((genre) => (
                                <Article
                                    key={genre.id} 
                                    title={genre.title}
                                    description={genre.description}
                                    image={genre.icon}
                                    alt_image={genre.alt_image}
                                    link={`/generos/${genre.link}`}
                                />
                            ))
                        }
                    </MusicalGenres>
                </Section>

            </main>
            <Footer/>
        </>
    )
}