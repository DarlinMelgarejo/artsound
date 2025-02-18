import './assets/scss/styles.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { Loader } from './components/Loader'
import { GenresPage } from './pages/GenresPage'
import { ArtistsPage } from './pages/ArtistsPage'
import { ArtistSinglePage } from './pages/ArtistSinglePage'
import { GenreSinglePage } from './pages/GenreSinglePage'
import { ScrollToTop } from './components/ScrollToTop'

export const App = () => {

    return (
        <>
            <BrowserRouter>
                <Loader />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/generos/" element={<GenresPage />} />
                    <Route path="/generos/:link" element={<GenreSinglePage />} />
                    <Route path="/artistas/" element={<ArtistsPage />} />
                    <Route path="/artistas/:link" element={<ArtistSinglePage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
