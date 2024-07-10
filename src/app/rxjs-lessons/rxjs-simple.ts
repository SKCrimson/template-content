import { debounceTime, distinctUntilChanged, fromEvent, map, Observable } from "rxjs";

const search$ = new Observable<Event>(observer => {
    const search = document.getElementById('search');

    if (!search) {
        observer.error('Element does not exist!');
        return;
    }

    search.addEventListener('input', event => {
        observer.next(event);
    });
});

search$
    .pipe(
        map(event => {
            return (event.target as HTMLInputElement).value;
        }),
        debounceTime(500),
        distinctUntilChanged()
    ).subscribe({
        next: value => {
            console.log(value);
        },
        error: e => {
            console.log(e);
        }
    });