import { createActions } from 'redux-actions'

const { setMenuOpened } = createActions({
  SET_MENU_OPENED: menuOpened => ({ menuOpened }),
});

export {
  setMenuOpened
}
