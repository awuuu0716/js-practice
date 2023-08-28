import testData from "../../fixtures/twoSum.json";
import twoSum from "./twoSum";

describe("測試 twoSum.js", () => {
  testData.forEach(({ input, output }) => {
    test(`nums: [${input[0]}] target: ${input[1]} expect: [${output}]`, () => {
      expect(twoSum(...input).toString()).toBe(output.toString());
    });
  });
});
