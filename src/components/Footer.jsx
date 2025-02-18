import { FacebookIcon, GitHubIcon, InstagramIcon, TiktokIcon } from "./Icons"

export const Footer = () => (
    <footer className="main-footer">
        <div className="main-footer__content">
            <div className="main-footer__section">
                <h4 className="main-footer__title">ARTSOUND</h4>
                <div className="main-footer__logo">
                    <img src="/images/logo.png" alt="Logo de Patitas Felices"/>
                </div>
            </div>
            <div className="main-footer__section">
                <h4 className="main-footer__title">REDES SOCIALES</h4>
                <div className="main-footer__social">
                    <a className="main-footer__social-link" target="_blank" href="https://web.facebook.com/profile.php?id=61560857716467"
                        title="Ir a Facebook">
                        <FacebookIcon/>
                    </a>
                    <a className="main-footer__social-link" target="_blank" href="https://www.instagram.com/artsoundmusic/"
                        title="Ir a Instagram">
                        <InstagramIcon/>
                    </a>
                    <a className="main-footer__social-link" target="_blank" href="https://www.tiktok.com/@artsoundmusicoficial"
                        title="Ir a TikTok">
                        <TiktokIcon/>
                    </a>
                    <a className="main-footer__social-link" target="_blank" href="https://github.com/DarlinMelgarejo"
                        title="Ir a GitHub">
                        <GitHubIcon/>
                    </a>
                </div>
            </div>
            <div className="main-footer__section">
                <h4 className="main-footer__title">CONTACTANOS</h4>
                <div className="main-footer__contact">
                    <div className="main-footer__contact-item">
                        <img src="/icons/whatsapp.svg" alt="Icono de WhatsApp" />
                        <span>912851961</span>
                    </div>
                    <div className="main-footer__contact-item">
                        <img src="/icons/whatsapp.svg" alt="Icono de WhatsApp"/>
                        <span>913326779</span>
                    </div>
                    <div className="main-footer__contact-item">
                        <img src="/icons/gmail.svg" alt="Icono de Gmail" />
                        <span>artsoundmusic2024@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="main-footer__copyright">
            © 2024 ArtSound. Todos los derechos reservados.
        </div>
    </footer>
)