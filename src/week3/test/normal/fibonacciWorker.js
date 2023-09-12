const { Worker } = require("worker_threads");

/**
 *
 * @typedef {Object} Options
 * @property {number} timeout
 *
 * @param {number} num
 * @param {Options} options
 *
 * @returns {Promise<number>}
 */
const runFibonacciWorker = (num, options) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./src/week3/test/normal/fibonacci.js", {
      workerData: { num },
    });
    worker.on("message", resolve);
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0) reject(new Error(`stopped with  ${code} exit code`));
    });

    if (options?.timeout) {
      setTimeout(() => {
        resolve("Test timeout");
        worker.terminate();
      }, options.timeout);
    }
  });
};

export default runFibonacciWorker;
