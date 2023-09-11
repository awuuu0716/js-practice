/**
 * @description
 * 輸入一個正整數 treeSize，按照規律返回大小為 treeSize 的聖誕樹字串，
 * 字串由空格、* 及換行符號 \n 組成，
 * 完成 function 後可以在 tree.html 確認結果(在同資料夾的 tree.html 打開 live-server)，
 * 請回傳組成圖形的完整字串（含空格、符號及換行符號）。
 *
 * 例如 treeSize 為 3，則印出：
 *   *
 *  ***
 * *****
 *   *
 *   *
 *   *
 *
 * treeSize 為 5，則印出：
 *     *
 *    ***
 *   *****
 *  *******
 * *********
 *     *
 *     *
 *     *
 *     *
 *     *
 *
 * @example
 * tree(3)
 * 返回 "  *\n ***\n*****\n  *\n  *\n  *\n"
 *
 * @example
 * tree(5)
 * 返回 "    *\n   ***\n  *****\n *******\n*********\n    *\n    *\n    *\n    *\n    *\n"
 *
 * @param {number} treeSize
 *
 * @return {string}
 */

function tree(treeSize) {
  // draw your tree :)
  return Array.from(Array(treeSize))
    .map((_, index) => {
      const treeTop = `${" ".repeat(treeSize - 1 - index)}${"*".repeat(
        getPositiveOdd(index + 1)
      )}\n`;
      return treeTop;
    })
    .concat(
      Array.from(Array(treeSize)).map(() => {
        const trunk = `${" ".repeat(treeSize - 1)}*\n`;
        return trunk;
      })
    )
    .join("");
}
const getPositiveOdd = (n) => Math.max(2 * n - 1, 1);

export default tree;
