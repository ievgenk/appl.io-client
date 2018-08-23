import { MOVE_CARD_WITHIN } from "../actions/boardActions";

const initialState = {
  boards: {
    "board-1": {
      id: "board-1",
      title: "Applied",
      cardIds: ["card-1", "card-2", "card-3", "card-4"]
    },
    "board-2": {
      id: "board-2",
      title: "Offer Received",
      cardIds: ["card-5", "card-6", "card-7", "card-8"]
    },
    "board-3": {
      id: "board-3",
      title: "Phone Screen",
      cardIds: ["card-9", "card-10", "card-11", "card-12"]
    }
  }
};

export default (state = initialState, action) => {
  console.log(action.newBoard);
  switch (action.type) {
    case MOVE_CARD_WITHIN:
      return {
        ...state,
        boards: {
          ...state.boards,
          [action.newBoard.id]: action.newBoard
        }
      };

    default:
      return state;
  }
};
