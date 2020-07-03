// import React from "react";

// import Enzyme, { shallow } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// import ShortSentence from "./ShortSentence";

// Enzyme.configure({ adapter: new Adapter() });

// describe("ShortSentence", () => {
//   let wrapper;

//   beforeEach(() => {
//     wrapper = shallow(<ShortSentence length={10} />);
//   });

//   it('should display a button with the label "cortar"', () => {
//     expect(wrapper.containsMatchingElement(<button>cortar</button>)).toBe(true);
//   });

//   it("should have an `input` element", () => {
//     const sentence = "esto es demasiado largo";
//     const input = wrapper.find("input").first();
//     input.simulate("change", {
//       target: { value: sentence }
//     });

//     expect(wrapper.containsMatchingElement(<input value={sentence} />)).toBe(
//       true
//     );
//   });

//   it("should trim a sentence", () => {
//     const sentence = "esto es demasiado largo";
//     const input = wrapper.find("input").first();
//     const button = wrapper.find("button").first();
//     input.simulate("change", {
//       target: { value: sentence }
//     });
//     button.simulate("click");

//     expect(
//       wrapper.containsMatchingElement(
//         <h4>la frase cortada es: esto es de...</h4>
//       )
//     ).toBe(true);
//   });
// });
