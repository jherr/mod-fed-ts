import packageJSON from "./package.json";

function remoteConfig(name, url) {
  return {
    type: "module",
    name,
    entry: url,
    entryGlobalName: "remote",
    shareScope: "default",
  };
}

export default {
  filename: "remoteEntry.js",
  name: "SolidModFed",
  exposes: {
    "./CounterLauncher": "./src/CounterLauncher.tsx",
    "./counterStore": "./src/counterStore.ts",
  },
  remotes: {},
  shared: {
    "solid-js": {
      singleton: true,
      requiredVersion: packageJSON.dependencies["solid-js"],
    },
  },
};
