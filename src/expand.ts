import { expand, map, filter, tap, take, reduce } from "rxjs/operators";
import { EMPTY, of } from "rxjs";
import { findAllAlbumsForUser } from "./data/index";
import { userFlatMap$ } from "./flatMap";

// example of recursion, TODO: make relevant
const fuelNeededForMass = (mass: number) => Math.floor(mass / 3) - 2;
const totalFuelNeededByMass$ = (mass: number) =>
  of(mass).pipe(
    map((m: number) => fuelNeededForMass(m)),
    filter((m: number) => m > 0),
    expand((m: number) =>
      fuelNeededForMass(m) > 0 ? of(fuelNeededForMass(m)) : EMPTY
    ),
    reduce((acc: number, lastMass: number) => (acc += lastMass), 0)
  );

totalFuelNeededByMass$(14).subscribe(r =>
  console.log(`recursive expand: ${r}`)
);

const expand$ = userFlatMap$.pipe(
  take(1),
  expand(user => (user.id ? findAllAlbumsForUser(user.id) : EMPTY))
  // tap(console.log)
);

export { expand$ };
