import { map, tap } from "rxjs/operators";
import { userFlatMap$ } from "./flatMap";

const usersMap$ = userFlatMap$.pipe(
  // tap(console.log),
  // unpack the outter obs
  map(user => user.name)
);

export { usersMap$ };
