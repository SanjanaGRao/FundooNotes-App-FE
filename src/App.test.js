import App from "./App";
import { mount,shallow } from "enzyme";

describe("Counter Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test("render the title ", () => {
    expect(wrapper.find("h1").text()).toContain("Hello");
  });

});