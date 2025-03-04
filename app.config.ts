import { ExpoConfig } from "expo/config"

const config: ExpoConfig = {
  name: "tldraw-ipad",
  slug: "tldraw-ipad",
  icon: "./assets/images/app-icon.jpg",
  version: "0.1.0",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  scheme: "tldraw-ipad",
  ios: {
    bundleIdentifier: "com.pvinis.tldraw-ipad",
    supportsTablet: true,
    // appleTeamId: "2Q3HA5463Z", ///////
    config: { usesNonExemptEncryption: false },
  },
  orientation: "portrait",
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },

  owner: "pvinis",
  extra: { eas: { projectId: "34d17fcf-a1fa-4623-ae63-d5d132b3b1b6" } },
}

export default config
