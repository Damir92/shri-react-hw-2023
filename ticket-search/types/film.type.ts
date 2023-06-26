import { GenreType } from './genre.type';

export type FilmType = {
    title: string,
    posterUrl: string,
    releaseYear: number,
    description: string,
    genre: GenreType,
    id: string,
    rating: number,
    director: string,
    reviewIds: string[],
}
