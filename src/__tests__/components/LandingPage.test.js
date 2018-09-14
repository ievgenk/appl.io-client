import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store"; // Smart components
import LandingPage from "../../components/LandingPage";
import NavBar from "../../components/NavBar";

const createStore = configureStore();
const store = createStore();

describe("<LandingPage />", () => {
  it("Render()", () => {
    const component = shallow(<LandingPage store={store} />);
    expect(component.contains(<NavBar position="landing" />)).toBeTruthy();
  });
});
