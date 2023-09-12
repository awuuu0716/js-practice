import runFibonacciWorker from "./fibonacciWorker";
import testData from "../../fixtures/fibonacci.json";

const TIMEOUT = 1000;

describe("測試 fibonacci.js", () => {
  testData.forEach(({ input, output }) => {
    test(
      `input:${input}, output: ${output}`,
      async () => {
        const res = await runFibonacciWorker(input, { timeout: TIMEOUT });
        expect(res).toBe(output);
      },
      TIMEOUT
    );
  });
});
