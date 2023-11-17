export default {
  "expo": {
    "name": "mcare",
    "slug": "mcare",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/mainlogo.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/mainlogo.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*" 
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/mainlogo.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/mainlogo.png"
    },   
    "android": {
    "package": "com.mcare",
    },
    "extra": {
      "eas": {
        "projectId": "8fce0b88-2885-4e4e-930f-0fc1fe8ef4dc"
      }
  }
}
}