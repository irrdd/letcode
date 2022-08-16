/*
 * @Author: 王东旭
 * @Date: 2022-08-16 11:19:03
 * @LastEditTime: 2022-08-16 11:19:04
 * @LastEditors: 王东旭
 * @Description:
 * @FilePath: /letcode/babel.config.js
 * @
 */
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
};
