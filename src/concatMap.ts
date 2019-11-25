import { concatMap } from "rxjs/operators";
import { User } from "./data/types";
import { findPostsByUserId } from "./data/posts";
import { userFlatMap$ } from "./flatMap";

const concatMap$ = userFlatMap$.pipe(
  concatMap(
    (u: User) => findPostsByUserId(u.id),
    (user, posts) => Object.assign({}, { ...user }, { posts: [...posts] })
  )
);

export { concatMap$ };
