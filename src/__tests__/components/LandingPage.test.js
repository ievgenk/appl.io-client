import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import configureStore from "redux-mock-store"; // Smart components
import LandingPage from "../../components/LandingPage";
import NavBar from "../../components/NavBar";

describe("<LandingPage />", () => {
  it("Render()", () => {
    const component = shallow(<LandingPage />);
    expect(
      component.contains(
        <h1>
          <span role="img" aria-label="maginfying glass emoji">
            🔍
          </span>
          Track Your
          <br />
          <span role="img" aria-label="suitcase emoji">
            💼
          </span>
          Job
          <br />
          <span
            role="img"
            aria-label="document with pencil writing on it emoji"
          >
            📝
          </span>
          Applications
          <br />
          <span role="img" aria-label="ok hand gesture emoji">
            👌
          </span>
          With Ease!
        </h1>
      )
    ).toBeTruthy();
    expect(component.contains(<NavBar position="landing" />)).toBeTruthy();
    expect(component).toMatchSnapshot();
  });
});
