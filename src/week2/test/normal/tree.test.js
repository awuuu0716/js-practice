import tree from "./tree";
import testData from "../../fixtures/tree.json";

describe("測試 tree.js", () => {
  testData.forEach(({ input, output }) => {
    test(`number: [${input}], expect:[${output}]`, () => {
      expect(tree(input).toString()).toBe(output);
    });
  });
});
