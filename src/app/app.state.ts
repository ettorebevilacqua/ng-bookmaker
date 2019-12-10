import { Bookmark } from './models/bookmark';

export interface AppState {
  readonly bookmarks: Bookmark[];
}
