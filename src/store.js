import { createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";

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
  },
  cards: {
    "card-1": {
      id: "card-1",
      title: "test-1"
    },
    "card-2": {
      id: "card-2",
      title: "test-2"
    },
    "card-3": {
      id: "card-3",
      title: "test-3"
    },
    "card-4": {
      id: "card-4",
      title: "test-4"
    },
    "card-5": {
      id: "card-5",
      title: "test-5"
    },
    "card-6": {
      id: "card-6",
      title: "test-6"
    },
    "card-7": {
      id: "card-7",
      title: "test-7"
    },
    "card-8": {
      id: "card-8",
      title: "test-8"
    },
    "card-9": {
      id: "card-9",
      title: "test-9"
    },
    "card-10": {
      id: "card-10",
      title: "test-10"
    },
    "card-11": {
      id: "card-11",
      title: "test-11"
    },
    "card-12": {
      id: "card-12",
      title: "test-12"
    }
  },
  boardOrder: ["board-1", "board-2", "board-3"]
};

export const store = createStore(rootReducer);
