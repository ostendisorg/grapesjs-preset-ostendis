export default ({ config }) => {
  // This is how you can distinguish the `build` command from the `serve`
  const isBuild = config.mode === 'production';

  return {
      ...config,
      entry: {
        'grapesjs-preset-ostendis': './src/index.js',
        'grapesjs-preset-ostendis-adv': './src/adv/index.js',
      },
      output: {
        filename: '[name].min.js',
        libraryTarget: 'umd',
      },
  };
}
