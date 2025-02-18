import PropTypes from "prop-types";
import { Song } from "./Song";
import { useState } from "react";

export const SongList = ({ songs }) => {
    const [selectedSong, setSelectedSong] = useState(null); // Estado para manejar la canción seleccionada

    // Seleccionar una canción
    const handleSelect = (songName) => {
        setSelectedSong(songName); // Actualizamos la canción seleccionada
    };

    return (
        <div className="width-100 grid grid-cols-1 grid-cols-s-2 grid-cols-l-3 gap-2">
            {songs.map((song, index) => (
                <Song
                    key={index}
                    name_song={song.name}
                    image_album={song.album}
                    alt_image={song.alt_image}
                    audio={song.audio}
                    isSelected={song.name === selectedSong} // Determina si esta canción está seleccionada
                    onSelect={handleSelect} // Llamamos a handleSelect cuando se hace clic en la canción
                />
            ))}
        </div>
    );
};

SongList.propTypes = {
    songs: PropTypes.array.isRequired,
};
