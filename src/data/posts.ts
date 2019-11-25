import { fromFetch } from "rxjs/fetch";
import { handleRes } from "./utils";
import { Observable } from "rxjs";
import { Post } from "./types";

const findPostsByUserId = (userId: number): Observable<Post[]> =>
  fromFetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).pipe(
    handleRes()
  );

export { findPostsByUserId };
