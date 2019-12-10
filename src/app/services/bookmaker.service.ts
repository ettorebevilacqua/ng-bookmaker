
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as BookmakersActions from '../actions/bookmakers.actions';

import * as fromBookmakerReducer from '../reducers/bookmark.reduce';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';

import { Store, select } from '@ngrx/store';
import { AppState } from './../app.state';
import { Bookmark } from './../models/bookmark';



@Injectable()
export class BookmarkService {

    private allTodos;
    private todoById;
    constructor(private store: Store<AppState> ) {


      this.allTodos = createSelector(
        fromBookmakerReducer.selectAll,
        (entities) => {
          return entities;
        }
      );

      this.todoById = createSelector(fromBookmakerReducer.selectEntities,
        (entities: Dictionary<Bookmark>, props: {id: number}) => {
          return entities[props.id];
        }
      );

    }

    public add(data: Bookmark) {
      data.id = new Date().getTime();
      this.store.dispatch(new BookmakersActions.CreateActionCreator(data) );
    }


    public list() {
      return this.store.pipe(select(this.allTodos));
    }

    public remove(id: number) {
      this.store.dispatch(new BookmakersActions.DeleteActionCreator(id));
    }

    public getDetail(id: number) {
      return this.store.pipe(select(this.todoById, {id}));
    }

    public edit(id: number, changes: Bookmark) {
      this.store.dispatch(new BookmakersActions.UpdateActionCreator({id, changes}));
    }
}
