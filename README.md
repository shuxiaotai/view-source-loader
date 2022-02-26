[![npm][npm]][npm-url]

<div align="center">
  <h1>View Source Loader</h1>
  <p>A webpack loader to view output in your project</p>
</div>

<h2 align="center">Install</h2>

```bash
  npm i --save-dev view-source-loader
```

```bash
  yarn add --dev view-source-loader
```

<h2 align="center">Usage</h2>

**webpack.config.js**

You can config `view-source-loader` before any loader. For example, you now config before `babel-loader`, After you build with webpack, you will find a file named `view-source-loader.txt` in your project, it can view the result that your code compiled with `ts-loader` and `babel-loader`, it can help you in the development environment

```js
module.exports = {
  entry: {
    index: path.resolve(__dirname, "./src/index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[contenthash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s(x)?$/,
        include: [path.resolve(__dirname, "src")],
        use: ["view-source-loader", "babel-loader", "ts-loader"],
      },
    ],
  },
};
```

[npm]: https://img.shields.io/badge/npm-8.1.2-blue
[npm-url]: https://npmjs.com/package/view-source-loader
