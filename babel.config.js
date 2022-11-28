module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          alias: {
            "@screens": "./screens",
            "@utils": "./utils",
            "@hooks": "./hooks",
            "@assets": "./assets",
            "@constants": "./constants",
            "@types": "./types",
            "@navigation": "./navigation",
            "@redux": "./redux",
            "@services": "./services",
            "@network": "./networkAPI",
            "@components": "./components",
          },
        },
      ],
    ],
  };
};
