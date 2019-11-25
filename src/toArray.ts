import { concatMap$ } from "./concatMap";
import { toArray } from "rxjs/operators";

const toArray$ = concatMap$.pipe(toArray());

export { toArray$ };
