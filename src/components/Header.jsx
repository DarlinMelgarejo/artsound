import PropTypes from "prop-types"
import { useRef } from "react"
import { Link } from "react-router-dom"

export const Header = ({ transparent }) => {
    const hiddenMenu = useRef(null)

    const showMenu = () => {
        hiddenMenu.current.classList.toggle("show")
    }

    return (
        <header className={`main-header ${transparent ? 'transparent' : ''}`}>
            <div className="main-header__container">
                <Link to="/" className="main-header__logo">
                    <img src="/logo.png" alt="Logo de ArtSound" />
                </Link>
                <nav className="main-header__menu">
                    <Link to="/" className="main-header__link">Inicio</Link>
                    <Link to="/generos" className="main-header__link">Géneros</Link>
                    <Link to="/artistas" className="main-header__link">Artistas</Link>
                </nav>
                <div className="main-header__menu-toggle" onClick={showMenu}></div>
            </div>
            <nav className="main-header__hidden-menu" ref={hiddenMenu}>
                    <Link to="/" className="main-header__link" onClick={showMenu}>Inicio</Link>
                    <Link to="/generos" className="main-header__link" onClick={showMenu}>Géneros</Link>
                    <Link to="/artistas" className="main-header__link" onClick={showMenu}>Artistas</Link>
            </nav>
        </header>
    )
}

Header.propTypes = {
    transparent: PropTypes.bool
}