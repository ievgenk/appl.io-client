import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store"; // Smart components
import App from "../../components/App";

describe("<App />", () => {
  it("Render()", () => {
    const component = shallow(<App />);
  });
});