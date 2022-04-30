// const css = require("./dist/index.min.css");

// const csstext = JSON.stringify(css.default)

// console.log(css);
// console.log(csstext);
// const style = document.createElement("style");
// try {
//   style.appendChild(document.createTextNode(csstext));
// } catch (ex) {
//   style.textContent = csstext;
// }
// var head = document.getElementsByTagName("head")[0];
// head.appendChild(style);

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  module.exports = require("./dist/index.js");
} else {
  module.exports = require("./dist/index.min.js");
}

//     "react": "^17.0.2",
// "react-dom": "^17.0.2",