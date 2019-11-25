import { concatAll } from "rxjs/operators";
import { forkJoin$ } from "./forkJoin";

const concatAll$ = forkJoin$.pipe(concatAll());

export { concatAll$ };
