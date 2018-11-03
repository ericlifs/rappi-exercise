import { handleActions } from 'redux-actions'
import { setMenuOpened } from 'actions/ui'

const defaultState = {
  menuOpened: false
}

const reducer = handleActions(
  {
    [setMenuOpened]: (state, { payload: { menuOpened } }) => ({
      ...state,
      menuOpened
    })
  },
  defaultState
)

export default reducer
