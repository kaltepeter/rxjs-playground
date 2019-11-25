import "./style.css";
import "./components/code-block";
import "./components/group-container";
import {
  userFlatMap$,
  userFlatMapWithPosts$,
  usersMap$,
  concatMap$,
  toArray$,
  combineAll$,
  handleGroup,
  forkJoin$,
  concatAll$
} from "./index";

userFlatMap$.pipe(handleGroup("userFlatMap$")).subscribe();
userFlatMapWithPosts$.pipe(handleGroup("userFlatMapWithPosts$")).subscribe();
usersMap$.pipe(handleGroup("usersMap$")).subscribe();
concatMap$.pipe(handleGroup("concatMap$")).subscribe();
toArray$.pipe(handleGroup("toArray$")).subscribe();
combineAll$.pipe(handleGroup("combineAll$")).subscribe();
forkJoin$.pipe(handleGroup("forkJoin$")).subscribe();
concatAll$.pipe(handleGroup("concatAll$")).subscribe();
