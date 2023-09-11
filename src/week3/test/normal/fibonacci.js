const { parentPort, workerData } = require("worker_threads");
/**
 * @description 費氏數列, 輸入一個數字 n, 找到費式數列的第 n 個數字是多少
 * 費式數列從 0 開始, 第 n 個數字為前 2 個數字的總和,
 * n = 0 時, 回傳 0
 * n = 1 時, 回傳 1
 * n = 2 時, 回傳 1
 * n = 3 時, 回傳 2
 * n = 4 時, 回傳 3
 * ...
 * n = n 時, 回傳 fibonacci(n - 1) + fibonacci(n - 2)
 *
 * 依此規則，前幾個數字如下:
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
 *
 * 假設 n = 10, fibonacci(10) 返回 55
 *
 * @example
 * fibonacci(1)
 * 返回 1
 *
 * @example
 * fibonacci(2)
 * 返回 1
 *
 * @example
 * fibonacci(6)
 * 返回 8
 *
 * @param {number} n - 第 n 個數字
 *
 * @return {number} 第 n 個數字是多少
 */
function fibonacci(n) {
  // Do your magic
}

parentPort.postMessage(fibonacci(workerData.num));
