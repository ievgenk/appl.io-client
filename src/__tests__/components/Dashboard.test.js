import React from "react";
import { shallow, render } from "enzyme";
import Dashboard from "../../components/Dashboard";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store"; // Smart components
const mockStore = configureStore();
const store = mockStore({
  boards: {
    "5b996322d1473646489d850a": {
      cards: [],
      _id: "5b996322d1473646489d850a",
      title: "Applied",
      user: {
        _id: "5b996322d1473646489d8509",
        email: "ekasian@outlook.com",
        password:
          "$2b$10$hmeGU07MuwrC7hitFVnU/eOf8YRXLrP9zx48K54U46ZmQR9UAKyaS",
        __v: 0
      },
      __v: 0,
      cardIds: ["1"],
      id: "5b996322d1473646489d850a"
    },
    "5b996322d1473646489d850b": {
      cards: [],
      _id: "5b996322d1473646489d850b",
      title: "Phone Screen",
      user: {
        _id: "5b996322d1473646489d8509",
        email: "ekasian@outlook.com",
        password:
          "$2b$10$hmeGU07MuwrC7hitFVnU/eOf8YRXLrP9zx48K54U46ZmQR9UAKyaS",
        __v: 0
      },
      __v: 0,
      cardIds: [],
      id: "5b996322d1473646489d850b"
    },
    "5b996322d1473646489d850c": {
      cards: [],
      _id: "5b996322d1473646489d850c",
      title: "Interview",
      user: {
        _id: "5b996322d1473646489d8509",
        email: "ekasian@outlook.com",
        password:
          "$2b$10$hmeGU07MuwrC7hitFVnU/eOf8YRXLrP9zx48K54U46ZmQR9UAKyaS",
        __v: 0
      },
      __v: 0,
      cardIds: [],
      id: "5b996322d1473646489d850c"
    },
    "5b996322d1473646489d850d": {
      cards: [],
      _id: "5b996322d1473646489d850d",
      title: "Rejected",
      user: {
        _id: "5b996322d1473646489d8509",
        email: "ekasian@outlook.com",
        password:
          "$2b$10$hmeGU07MuwrC7hitFVnU/eOf8YRXLrP9zx48K54U46ZmQR9UAKyaS",
        __v: 0
      },
      __v: 0,
      cardIds: [],
      id: "5b996322d1473646489d850d"
    },
    "5b996322d1473646489d850e": {
      cards: [],
      _id: "5b996322d1473646489d850e",
      title: "Accepted Offer",
      user: {
        _id: "5b996322d1473646489d8509",
        email: "ekasian@outlook.com",
        password:
          "$2b$10$hmeGU07MuwrC7hitFVnU/eOf8YRXLrP9zx48K54U46ZmQR9UAKyaS",
        __v: 0
      },
      __v: 0,
      cardIds: [],
      id: "5b996322d1473646489d850e"
    }
  },
  cards: {
    "1": {
      companyName: "Microsfot",
      postingURL: "",
      contactName: "Ievgen Kasian",
      contactEmail: "ekasian@outlook.com",
      contactPhone: "+1 07789805853",
      date: "12 September 2018"
    }
  },
  toDashboard: false,
  openCard: {},
  auth: {
    loading: false,
    login: {
      userId: "5b996322d1473646489d8509",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVrYXNpYW5Ab3V0bG9vay5jb20iLCJ1c2VySWQiOiI1Yjk5NjMyMmQxNDczNjQ2NDg5ZDg1MDkiLCJpYXQiOjE1MzY3ODg3MDIsImV4cCI6MTUzNjc5MjMwMn0.qZ5hWMj2nKGu8DX0nwu3mGn6iI6kzCud2drEzlkvEsE",
      error: null
    },
    register: {
      success: false,
      message: null,
      error: null
    }
  },
  router: {
    location: {
      pathname: "/dashboard",
      search: "",
      hash: "",
      key: "182sl5"
    },
    action: "PUSH"
  }
});

describe("<Dashboard />", () => {
  it("Renders()", () => {
    shallow(<Dashboard store={store} />);
  });

  // it("When the card is dropped to another board it dispatches the correct action", () => {
  //   render(
  //     <MemoryRouter>
  //       <Provider store={store}>
  //         <Dashboard />
  //       </Provider>
  //     </MemoryRouter>
  //   );
  // });
});
