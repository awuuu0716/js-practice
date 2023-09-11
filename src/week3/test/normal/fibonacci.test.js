import runFibonacciWorker from "./fibonacciWorker";
import testData from "../../fixtures/fibonacci.json";

describe("測試 fibonacci.js", () => {
  testData.forEach(({ input, output }) => {
    test(`input:${input}, output: ${output}`, async () => {
      const res = await runFibonacciWorker(input);
      expect(res).toBe(output);
    });
  });
});
