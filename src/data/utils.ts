import { of, pipe, Observable, UnaryFunction } from "rxjs";
// import { fromFetch } from "rxjs/fetch";
import { switchMap, catchError } from "rxjs/operators";

// export interface Success {
//   error: false;
//   message: string;
// }

export interface ErrorMsg {
  error: true;
  message: string;
}

// export type HttpRes = Success | ErrorMsg;

const handleRes = <R>() => (source: Observable<Response>): Observable<R> =>
  source.pipe(
    switchMap((response: Response) => {
      if (response.ok) {
        // OK return data
        return response.json();
      } else {
        // Server is returning a status requiring the client to try something else.
        return of<ErrorMsg>({
          error: true,
          message: `Error ${response.status}`
        });
      }
    }),
    catchError(err => {
      // Network or other error, handle appropriately
      console.error(err);
      return of<ErrorMsg>({ error: true, message: err.message });
    })
  );

export { handleRes };
