import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

const app = document.getElementById("app");

const displayItem = (item?) => {
  const it = item;
  const di = it ? JSON.stringify(it, null, 2) : " ";
  const block = document.createElement("code-block");
  block.innerText = di;
  return block;
};

const handleGroup = <R>(header: string) => (
  source: Observable<any>
): Observable<R> => {
  let frag, container;
  return source.pipe(
    tap({
      next: val => {
        if (!frag) {
          frag = new DocumentFragment();
          container = document.createElement("group-container");
          container.header = header;
          frag.appendChild(container);
          app.appendChild(frag);
        }
        container.appendChild(displayItem(val));
      },
      error: error => {
        console.log("on error", error.message);
      },
      complete: () => {}
    })
  );
};

export { handleGroup, displayItem, app };
