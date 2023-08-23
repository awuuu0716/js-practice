import sum from "./sum";
import testData from "../fixtures/sum.json";

describe("測試 sum.js", () => {
  testData.forEach(({ input, output }) => {
    test(`${input[0]} + ${input[1]} = ${output}`, () => {
      expect(sum(...input)).toBe(output);
    });
  });
});
