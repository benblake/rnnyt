import { createSelector } from "reselect";
import {
  filterNewsBySearchTerm,
  reshapeNewsData,
} from "../util/dataTransformations";

const newsSelector = (state: any) => state.news;

const reshapeNewsSelector = createSelector(
  [newsSelector],
  reshapeNewsData,
);

export const allNewsSelector = createSelector(
  [reshapeNewsSelector],
  newsItems => newsItems,
);

const searchTermSelector = (state: any) => state.searchTerm;

const caseInsensitiveSearchTermSelector = createSelector(
  searchTermSelector,
  searchTerm => searchTerm.toLowerCase(),
);

export const searchNewsSelector = createSelector(
  [reshapeNewsSelector, caseInsensitiveSearchTermSelector],
  filterNewsBySearchTerm,
);
