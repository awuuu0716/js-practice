const { Worker } = require("worker_threads");

const runFibonacciWorker = (num) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./src/week3/test/normal/fibonacci.js", {
      workerData: { num },
    });
    worker.on("message", resolve);
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0) reject(new Error(`stopped with  ${code} exit code`));
    });

    setTimeout(() => {
      resolve("Test timeout");
      worker.terminate();
    }, 1000);
  });
};

export default runFibonacciWorker;
