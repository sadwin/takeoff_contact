module.exports = {
  presets: [
    [
      '@babel/preset-react',
      {
        useBuiltIns: true,
      },
    ],
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
  ],
  plugins: ['transform-class-properties'],
};
