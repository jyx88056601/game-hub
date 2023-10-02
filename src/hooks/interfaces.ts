export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  platforms: {}[];
  metacritic: number;
  rating_top: number
}

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// undefined: the absense of a value
// null: the intentional absense of a value
// simplified GameQuery interface 

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

export interface InfiniteFetchResponse<T> {
  count: number;
  results: T[];
  next: string | null;
}
