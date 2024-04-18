const isProduction = process.env.NODE_ENV == "production";

module.exports = ({ config }) => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return {
    ...config,
    entry: {
      "grapesjs-preset-ostendis": "./src/index.ts",
      // "grapesjs-preset-ostendis-adv": "./src/adv/index.ts",
    },
    output: {
      ...config.output,
      filename: "[name].min.js",
    },
  };
};
