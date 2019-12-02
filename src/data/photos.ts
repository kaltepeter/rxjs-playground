import { fromFetch } from "rxjs/fetch";
import { Observable } from "rxjs";
import { apiURI } from "./config";
import { handleRes } from "./utils";
import { Photo } from "./types";

const findAllPhotos = (): Observable<Photo[]> =>
  fromFetch(`${apiURI}/photos`).pipe(handleRes());

const findPhotoById = (photoId: number): Observable<Photo> =>
  fromFetch(`${apiURI}/photos/${photoId}`).pipe(handleRes());

const findAllPhotosForAlbum = (albumId: number): Observable<Photo[]> =>
  fromFetch(`${apiURI}/albums/${albumId}/photos`).pipe(handleRes());

export { findAllPhotos, findPhotoById, findAllPhotosForAlbum };
