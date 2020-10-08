import React from "react";
import { Input } from "./Input";
import { cleanup, render } from "@testing-library/react";

afterEach(cleanup);

describe("Input", () => {
  it("Can be found by associated label", () => {
    const labelText = "Test Label";
    const name = "Test";

    const { getByLabelText } = render(
      <Input label={{ text: labelText, name }} />
    );
    const input = getByLabelText(labelText);

    expect(input.id).toBe(name);
  });

  it("Renders with inital value", () => {
    const initVal = "Initial Value";

    const { getByDisplayValue } = render(<Input initialValue={initVal} />);
    const input = getByDisplayValue(initVal);

    expect(input.value).toBe(initVal);
  });

  it("Renders with the correct type", () => {
    const type = "number";
    const initVal = "1";

    const { getByDisplayValue } = render(
      <Input type={type} initialValue={initVal} />
    );
    const input = getByDisplayValue(initVal);

    expect(input).toHaveAttribute("type");
    expect(input.type).toBe(type);
  });
});
