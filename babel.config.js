module.exports = {
  presets: [
    [
      "module:metro-react-native-babel-preset",
      {unstable_transformProfile: "hermes-stable"},
    ],
  ],
  plugins: [
    [
      require.resolve("babel-plugin-module-resolver"),
      {
        root: ["./"],
        alias: {
          "@": "./src",
        },
      },
    ],
  ],
};
