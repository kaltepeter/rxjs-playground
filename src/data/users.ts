import { fromFetch } from "rxjs/fetch";
import { Observable } from "rxjs";
import { apiURI } from "./config";
import { handleRes } from "./utils";
import { User } from "./types";

const findAllUsers = (): Observable<User[]> =>
  fromFetch(`${apiURI}/users`).pipe(handleRes());

const findUserById = (userId: number): Observable<User> =>
  fromFetch(`${apiURI}/users/${userId}`).pipe(handleRes());

export { findAllUsers, findUserById };
