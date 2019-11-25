import { combineAll } from "rxjs/operators";
import { forkJoin$ } from "./forkJoin";

const combineAll$ = forkJoin$.pipe(combineAll());

export { combineAll$ };
