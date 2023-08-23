# 這是什麼

這是一個利用 [Jest](https://jestjs.io/) 來練習 JavaScript 的項目

## 如何安裝

```console
yarn
```

## 如何使用

- 完成 src/weekN/test 中未完成的 function, 例如 sum.js:

進去會看到以下畫面:

```js
/**
 * @description 這是一個會回傳兩個數字總和的函式
 *
 * @example
 * 返回 2
 * sum(1,1)
 *
 * @example
 * 返回 5
 * sum(2,3)
 *
 * @example
 * 返回 0.6
 * sum(0.2,0.4)
 *
 * @param {number} a - 第一個加數
 * @param {number} b - 第二個家數
 *
 * @return {number} 兩個數的和
 */
function sum(a, b) {
  // TODO: 完成這個 function
}
```

經過一番努力之後終於完成了:

```js
function sum(a, b) {
  return a + b;
}
```

- 進行測試:

```console
yarn test
```

- 竟然出錯了!?怎麼會這樣

```ps
測試 sum.js › 0.2 + 0.4 = 0.6

expect(received).toBe(expected) // Object.is equality

Expected: 0.6
Received: 0.6000000000000001

    5 |   testData.forEach(({ input, output }) => {
    6 |     test(`${input[0]} + ${input[1]} = ${output}`, () => {
>   7 |       expect(sum(...input)).toBe(output);
      |                             ^
    8 |     });
    9 |   });
    10| });
```

從錯誤訊息中可以得知，0.2 + 0.4 這個測試出了問題，正確的結果應該要得到 0.6，
但是卻得到了 0.6000000000000001。

接下來就回去修改 function，想辦法通過測試吧!
