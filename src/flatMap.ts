import { tap, flatMap, map } from "rxjs/operators";
import { findAllUsers } from "./data/users";
import { findPostsByUserId } from "./data/posts";
import { User } from "./data/types";

// alias mergeMap
const userFlatMap$ = findAllUsers().pipe(
  // tap(console.log),
  // unpack the outter obs
  flatMap(user => user)
);

const userFlatMapWithPosts$ = userFlatMap$.pipe(
  flatMap((u: User) =>
    findPostsByUserId(u.id).pipe(
      map(posts => Object.assign({}, { ...u }, { posts: [...posts] }))
    )
  )
  // tap(console.log)
);

export { userFlatMap$, userFlatMapWithPosts$ };
