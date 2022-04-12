import { createStore } from "redux";
import { defaultState } from "./defaultState";

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "DELETE_CARD":
      const deleteCardNewState = state.filter((item) => item.id !== action.id);
      return deleteCardNewState;
    case "EDIT_CARD":
      const editCardNewSate = state.map((item) => {
        if (item.id === action.id) {
          item.title = action.title;
          item.description = action.description;
        }
        return item;
      });

      return editCardNewSate;
    case "ADD_CARD":
      const addCardNewState = state.slice();
      const newCard = {
        id: Date.now(),
        date: action.date,
        title: action.title,
        description: action.description,
      };
      addCardNewState.unshift(newCard);

      return addCardNewState;

    default:
      return state;
  }
};

export const store = createStore(reducer);
