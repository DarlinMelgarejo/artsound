import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Mueve el scroll a la parte superior
    }, [location]); // Se ejecuta cada vez que la ruta cambie

    return null;
};
