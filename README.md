# 這是什麼

這是一個利用 [Jest](https://jestjs.io/) 來練習 JavaScript 的項目

## 如何安裝

1. 安裝 [Node.js](https://nodejs.org/zh-tw/download), 已經裝好了可以跳過這個步驟
2. 安裝 `yarn`, 這個項目使用 yarn 作為範例, 如果要用 npm 也可以, 已經裝好了可以跳過這個步驟

```console
npm install -g yarn
```

3. 安裝依賴

```console
yarn
```

## 注意事項

1. 生成式聊天機器人如: ChatGPT 禁止
2. 第三方函式庫如: numbro.js, decimal.js 禁止

## 如何使用

- 完成 src/weekN/test 中未完成的 function, 例如 sum.js:

進去會看到以下畫面:

```js
/**
 * @description 這是一個會回傳兩個數字總和的函式
 *
 * @example
 * sum(1,1)
 * 返回 2
 *
 * @example
 * sum(2,3)
 * 返回 5
 *
 * @example
 * sum(0.2,0.4)
 * 返回 0.6
 *
 * @param {number} numA - 第一個數字
 * @param {number} numB - 第二個數字
 *
 * @return {number} 兩個數的和
 */
function sum(numA, numB) {
  // TODO: 完成這個 function
}
```

經過一番努力之後終於完成了:

```js
function sum(numA, numB) {
  return numA + numB;
}
```

- 進行測試:

Terminal 執行以下指令:

```console
yarn test
```

- 竟然出錯了!? 怎麼會這樣

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

## 測試特定檔案 or 週

`yarn test` 預設會執行這裡所有的測試，想要測試特定檔案可以用以下指令:

```console
yarn test sum.test.js
```

也可以執行特定週 (資料夾)

```console
yarn test week1
```

或是特定目錄下的檔案

```console
yarn test week2/test/normal/tree.test.js
```

## "印出" 與 "返回" 的差異

如果在題目中看見 "印出"，代表是使用 `console.log` 來呈現結果，例如 week2/normal/tree.js:

```js
例如 num 為 3，則印出：
  *
 ***
*****
  *
  *
  *
```

返回或回傳則是指 function 的 return 值，例如以下 function 返回數字 1:

```js
function getNumberOne() {
  return 1;
}
```

要通過測試必須返回正確的值。
