import { UPDATE_BOOKMARK } from './../actions/bookmakers.actions';


import { Action } from '@ngrx/store';

import { Bookmark } from '../models/bookmark';

import * as BookmakersActions from '../actions/bookmakers.actions';

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createSelector, createFeatureSelector } from '@ngrx/store';


export interface BookmarkState extends EntityState<Bookmark> {

}

export const adapter: EntityAdapter<Bookmark> =
  createEntityAdapter<Bookmark>({
  });

const initialState: Bookmark =  {} as Bookmark;


export const initialTodoState: BookmarkState = adapter.getInitialState();


export function todoReducers(state = initialTodoState, action: BookmakersActions.Actions ) {

  switch (action.type) {
    case BookmakersActions.CREATE_BOOKMARK :
      return adapter.addOne(action.payload, state);

    case BookmakersActions.UPDATE_BOOKMARK:

      if (state.entities[action.payload.id] === undefined) {
        return state;
      }

      console.log('xxxxxxxxxxxx');
      console.log(action.payload.id);
      console.log(action.payload.changes);

      return  adapter.updateOne({
        id: action.payload.id,
        changes: action.payload.changes
      }, state);

    case BookmakersActions.DELETE_BOOKMARK:
      return  adapter.removeOne(action.id, state);
    default:
      return state;
  }
}

export const getTodoState = createFeatureSelector<BookmarkState>('todos');


export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors(getTodoState);
