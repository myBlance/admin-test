// src/filters/FilmsFilter.tsx
import { useEffect, useState } from "react";
import {
    Filter,
    TextInput,
    SelectInput,

} from "react-admin";

interface Genre {
    id: number;
    name: string;
}

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const GENRE_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;

export const FilmFilter = (props: any) => {
    const [genreChoices, setGenreChoices] = useState<{ id: string; name: string }[]>([]);

    useEffect(() => {
        fetch(GENRE_URL)
            .then(res => res.json())
            .then(data => {
                const genres = data.genres.map((g: Genre) => ({
                    id: g.id.toString(),
                    name: g.name,
                }));
                setGenreChoices(genres);
            });
    }, []);

    return (
        <Filter {...props}>
            <TextInput label="Tìm theo tên" source="query" alwaysOn />
            <SelectInput
                label="Thể loại"
                source="genre"
                choices={genreChoices}
                emptyText=""
            />
        </Filter>
    );
};

