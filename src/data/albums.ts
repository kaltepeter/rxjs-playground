import { fromFetch } from "rxjs/fetch";
import { Observable } from "rxjs";
import { apiURI } from "./config";
import { handleRes } from "./utils";
import { Album } from "./types";

const findAllAlbums = (): Observable<Album[]> =>
  fromFetch(`${apiURI}/albums`).pipe(handleRes());

const findByAlbumId = (albumId: number): Observable<Album> =>
  fromFetch(`${apiURI}/albums/${albumId}`).pipe(handleRes());

const findAllAlbumsForUser = (userId: number): Observable<Album[]> =>
  fromFetch(`${apiURI}/albums/?userId=${userId}`).pipe(handleRes());

export { findAllAlbums, findByAlbumId, findAllAlbumsForUser };
