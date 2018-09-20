import React from "react";
import { shallow } from "enzyme";
import App from "../../components/App";
import configureStore from "redux-mock-store";

const createStore = configureStore();
const store = createStore();

describe("<App />", () => {
  it("Render()", () => {
    shallow(<App store={store} />);
  });
});
