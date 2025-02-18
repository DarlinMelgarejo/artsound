import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";

export const Song = ({ name_song, image_album, alt_image, audio, isSelected, onSelect }) => {
    const songRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar si la canción está siendo reproducida
    const [isAudioReady, setIsAudioReady] = useState(false); // Estado para controlar si el audio está listo para reproducirse

    // Función para alternar la reproducción y pausa
    const playPauseSong = () => {
        if (isPlaying) {
            songRef.current.pause(); // Pausar la canción
        } else {
            songRef.current.play(); // Reproducir la canción
        }
        setIsPlaying(!isPlaying); // Cambiar el estado de reproducción
    };

    // Manejar el click en una canción
    const handleClick = () => {
        onSelect(name_song); // Cambiar la canción seleccionada
        
        // Cargar el audio solo cuando se hace clic en la canción
        if (!isAudioReady) {
            songRef.current.src = audio; // Asignar el audio
            setIsAudioReady(true); // Marcar el audio como listo
        }

        playPauseSong(); // Reproducir o pausar la canción
    };

    // Asegurarse de que si la canción termina, se actualiza el estado
    const handleEnded = () => {
        setIsPlaying(false); // Pausar la canción al terminar
    };

    // Este efecto se ejecuta cuando el archivo de audio está listo para reproducirse
    const handleCanPlayThrough = () => {
        if (isPlaying) {
            songRef.current.play(); // Reproducir el audio si estaba en reproducción
        }
    };

    // Si la canción es seleccionada, la reproducimos automáticamente
    useEffect(() => {
        if (!isSelected) {
            songRef.current.currentTime = 0
            songRef.current.pause()
            setIsPlaying(false)
        }
    }, [isSelected]); // Dependemos del estado `isSelected` para controlar la reproducción

    return (
        <div className="song" onClick={handleClick}>
            <div className={`${isPlaying ? "play" : "pause"}`}>
                <div className="load"></div>
                <div className="load"></div>
                <div className="load"></div>
                <div className="load"></div>
            </div>
            <div className="song__album">
                <img src={image_album} alt={alt_image} />
            </div>
            <div className="song__name">{name_song}</div>
            <audio
                ref={songRef}
                onEnded={handleEnded}
                onCanPlayThrough={handleCanPlayThrough} // Escuchamos cuando el audio esté listo para reproducirse
            />
        </div>
    );
};

Song.propTypes = {
    name_song: PropTypes.string.isRequired,
    image_album: PropTypes.string.isRequired,
    alt_image: PropTypes.string.isRequired,
    audio: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func.isRequired,
};
