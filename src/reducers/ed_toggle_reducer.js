const ED_TOGGLE = 'ED_TOGGLE';
const PREV_TOGGLE = 'PREV_TOGGLE';

const initState = {
  editor_toggle: false,
  previewer_toggle: false
};




export default (state = initState, action) => {

  switch (action.type) {

    case ED_TOGGLE:
      return {
        ...state,
        editor_toggle: !state.editor_toggle
      }
      case PREV_TOGGLE:
        return {
          ...state,
          previewer_toggle: !state.previewer_toggle
        }
    default:
      return state;
  }
};