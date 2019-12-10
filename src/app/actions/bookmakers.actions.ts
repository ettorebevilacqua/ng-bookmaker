
import { Action } from '@ngrx/store';

export const BOOKMARK = 'BOOKMARK';
export const BOOKMARK_SUCCESS = 'BOOKMARK SUCCESS';
export const BOOKMARK_FAIL = 'BOOKMARK FAIL';

export class LoadActionCreator implements Action {
  readonly type = BOOKMARK;
}

export class LoadActionCreatorSuccess implements Action {
  readonly type = BOOKMARK_SUCCESS;
  constructor(public payload: any) { }
}

export class LoadActionCreatorFail implements Action {
  readonly type = BOOKMARK_FAIL;
  constructor(public payload: any) { }
}

export const CREATE_BOOKMARK = 'CREATE BOOKMARK';
export const CREATE_BOOKMARK_SUCCESS = 'CREATE BOOKMARK SUCCESS';
export const CREATE_BOOKMARK_FAIL = 'CREATE BOOKMARK FAIL';

export class CreateActionCreator implements Action {
  readonly type = CREATE_BOOKMARK;
  constructor(public payload: any) { }
}

export class CreateActionCreatorSuccess implements Action {
  readonly type = CREATE_BOOKMARK_SUCCESS;
  constructor(public payload: any) { }
}

export class CreateActionCreatorFail implements Action {
  readonly type = CREATE_BOOKMARK_FAIL;
  constructor(public payload: any) { }
}

export const UPDATE_BOOKMARK = 'UPDATE BOOKMARK';
export const UPDATE_BOOKMARK_SUCCESS = 'UPDATE BOOKMARK SUCCESS';
export const UPDATE_BOOKMARK_FAIL = 'UPDATE BOOKMARK FAIL';

export class UpdateActionCreator implements Action {
  readonly type = UPDATE_BOOKMARK;
  constructor(public payload: any) { }
}

export class UpdateActionCreatorSuccess implements Action {
  readonly type = UPDATE_BOOKMARK_SUCCESS;
  constructor(public payload: any) { }
}

export class UpdateActionCreatorFail implements Action {
  readonly type = UPDATE_BOOKMARK_FAIL;
  constructor(public payload: any) { }
}

export const DELETE_BOOKMARK = 'DELETE BOOKMARK';
export const DELETE_BOOKMARK_SUCCESS = 'DELETE BOOKMARK SUCCESS';
export const DELETE_BOOKMARK_FAIL = 'DELETE BOOKMARK FAIL';

export class DeleteActionCreator implements Action {
  readonly type = DELETE_BOOKMARK;
  constructor(public id: number) { }
}

export class DeleteActionCreatorSuccess implements Action {
  readonly type = DELETE_BOOKMARK_SUCCESS;
  constructor(public payload: any) { }
}

export class DeleteActionCreatorFail implements Action {
  readonly type = DELETE_BOOKMARK_FAIL;
  constructor(public payload: any) { }
}

export type Actions =
  | LoadActionCreator
  | LoadActionCreatorSuccess
  | LoadActionCreatorFail
  | CreateActionCreator
  | CreateActionCreatorSuccess
  | CreateActionCreatorFail
  | UpdateActionCreator
  | UpdateActionCreatorSuccess
  | UpdateActionCreatorFail
  | DeleteActionCreator
  | DeleteActionCreatorSuccess
  | DeleteActionCreatorFail;


/*


import {  Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { todo } from './../models/todo.model'


export const ADD_TODO       = '[TODO] Add'
export const REMOVE_TODO    = '[TODO] Remove'
export const UPDATE_TODO       = '[TODO] Update'


export class AddTodo implements Action {
  readonly type = ADD_TODO

  constructor(public payload: todo) {

  }
}


export class UpdateTodo implements Action {
  readonly type = UPDATE_TODO

  constructor(public id: number,  public changes) {}
}

export class RemoveTodo implements Action {
  readonly type = REMOVE_TODO

  constructor(public id: number) {}
}


export type Actions = AddTodo | UpdateTodo | RemoveTodo
*/
