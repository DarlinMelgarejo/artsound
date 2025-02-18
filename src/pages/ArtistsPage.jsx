import { Banner } from "../components/Banner"
import { Carousel } from "../components/Carousel"
import { Header } from "../components/Header"
import { Section } from "../components/Section"
import { genres } from "../data/genres.json"
import { artists } from "../data/artists.json"
import { Footer } from "../components/Footer"
import { Helmet } from "react-helmet-async"

export const ArtistsPage = () => {
    return (
        <>
            <Helmet>
                <title>Artistas - ArtSound</title>
            </Helmet>
            <Header />
            <Banner
                wave
                title="Artistas Musicales" 
            />
            <main>
                <Section
                    title="Bienvenido a la sección de artistas de ArtSound"
                    description="Aquí encontrarás todo lo que necesitas saber sobre tus artistas favoritos. Desde sus biografías detalladas hasta las canciones que los han catapultado al éxito. Además, te compartimos datos curiosos y anécdotas que quizás no conocías, para que puedas conectar aún más con su música y su historia. Explora su trayectoria, descubre lo que los inspira y disfruta de los temas que han marcado su carrera. "
                    text_bold="¡Cada artista tiene algo único que contar, y en ArtSound te lo traemos todo!"
                />
                {
                    genres.map((genre) => (
                        <Section
                            key={genre.id}
                            title={`Artistas de ${genre.title}`}
                        >
                            <Carousel
                                items={artists.filter(artist => artist.genre == genre.title)}
                            />
                        </Section>
                    ))
                }
            </main>
            <Footer/>
        </>
    )
}
