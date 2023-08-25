import testData from "../../fixtures/firstMissingPositive.json";
import firstMissingPositive from "./firstMissingPositive";

describe("測試 firstMissingPositive.js", () => {
  testData.forEach(({ input, output }) => {
    test(`nums: [${
      input.length > 10 ? "very long array" : input
    }] expect: ${output}`, () => {
      expect(firstMissingPositive(input)).toBe(output);
    }, 2);
  });
});
