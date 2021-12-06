module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    sourceMaps: true,
    plugins: [
      '@babel/plugin-transform-react-jsx-source'
    ]
  };
};
