import {
    SET_LEVERANCIERS,
    ADD_LEVERANCIERS,
    LEVERANCIER_ERROR,
    SET_LEVERANCIER
  } from './actions';
  export default function cats(state = {
    item: [],
    items: []
  }, action = {}) {
    switch (action.type) {
      case ADD_LEVERANCIERS:
        return { ...state,
          items: [...state.items, action.results]
        };
      case SET_LEVERANCIER:
        return { ...state,
          item: action.results
        };
      case LEVERANCIER_ERROR:
        return { ...state,
          error: action.payload
        };
      case SET_LEVERANCIERS:
        return { ...state,
          items: action.results
        };
      default:
        return state;
    }
  }
  