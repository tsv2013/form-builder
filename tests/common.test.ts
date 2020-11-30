import { render } from "../uiml";

test("render label", () => {
    var result = render({ partclass: "label" });
    expect(result).toMatchSnapshot();
    expect(result.tagName).toBe("LABEL");
});

test("render input", () => {
    var result = render({ partclass: "input", data: "name" });
    expect(result).toMatchSnapshot();
    expect(result.tagName).toBe("INPUT");
});
