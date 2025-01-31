import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { changeUpdatedAt, clear, decrease, increase } from "./reducers/counter";
import { map } from "rxjs";


@Injectable()
export class AppEffects {

    constructor(private actions$: Actions) { }

    updateAt$ = createEffect(() => this.actions$.pipe(
        ofType(increase, decrease, clear),
        map(() => changeUpdatedAt({ updatedAt: Date.now() }))
    ));
}