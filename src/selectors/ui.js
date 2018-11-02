import { createSelector } from 'reselect'

export const getUI = state => state.ui;

export const getMenuOpened = createSelector(
  [getUI],
  ui => ui ? ui.menuOpened : false
);