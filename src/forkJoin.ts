import { forkJoin } from "rxjs";
import { findPostsByUserId, findUserById } from "./data/index";

const user5$ = findUserById(5);
const user5Posts$ = findPostsByUserId(5);

const forkJoin$ = forkJoin(user5$, user5Posts$);

export { forkJoin$ };
