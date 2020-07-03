import React from "react";

import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CamelCase from "./CamelCase";

Enzyme.configure({ adapter: new Adapter() });

describe("Camel Case Testing", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CamelCase />);
  });

  it('should display a button"', () => {
    expect(
      wrapper.containsMatchingElement(<button>convertir a camel case</button>)
    ).toBe(true);
  });

  it("should have an `input` element", () => {
    expect(wrapper.containsMatchingElement(<input />)).toBe(true);
  });

  it("should convert to camel case", () => {
    const input = wrapper.find("input").first();
    const button = wrapper.find("button").first();

    console.log(wrapper.state());

    input.simulate("change", { target: { value: "Hello people" } });
    button.simulate("click");

    console.log(wrapper.state());

    const h4Text = wrapper
      .find("h4")
      .last()
      .text();

    expect(h4Text).toBe("la frase en camel case es: hellopeople");
  });
});
